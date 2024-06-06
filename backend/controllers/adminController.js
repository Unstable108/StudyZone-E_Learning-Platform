const { TryCatch } = require("../middlewares/tryCatch");
const Courses = require("../models/Courses");
const Lecture = require("../models/Lecture");
const fs = require("fs");
const { promisify } = require("util");
const User = require("../models/User");

const unlinkAsync = promisify(fs.unlink);

// Create course
const createCourse = TryCatch(async (req, res) => {
  const { title, description, category, createdBy, duration, price } = req.body;
  const image = req.file;

  const newCourse = await Courses.create({
    title,
    description,
    category,
    createdBy,
    image: image?.path,
    duration,
    price,
  });

  res
    .status(201)
    .json({ message: `Course created successfully`, course: newCourse });
});

// Add lecture
const addLecture = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);

  if (!course)
    return res.status(404).json({
      message: `No Course with this id`,
    });

  const { title, description } = req.body;
  const file = req.file;

  const lecture = await Lecture.create({
    title,
    description,
    video: file?.path,
    course: course._id,
  });
  res.status(201).json({
    message: `Lecture added successfully`,
    lecture,
  });
});

// Delete lecture
const deleteLecture = TryCatch(async (req, res) => {
  const lecture = await Lecture.findById(req.params.id);

  if (!lecture)
    return res.status(404).json({
      message: `No Lecture with this id`,
    });

  await unlinkAsync(lecture.video);
  console.log("Video deleted");

  await lecture.deleteOne();

  res.json({ message: `Lecture Deleted` });
});

// Delete course
const deleteCourse = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);

  if (!course)
    return res.status(404).json({
      message: `No Course with this id`,
    });

  const lectures = await Lecture.find({ course: course._id });

  await Promise.all(
    lectures.map(async (lecture) => {
      await unlinkAsync(lecture.video);
      console.log(`Video deleted`);
    })
  );

  if (course.image) {
    await unlinkAsync(course.image);
    console.log("Image deleted");
  }

  await Lecture.deleteMany({ course: req.params.id });

  await course.deleteOne();

  await User.updateMany({}, { $pull: { subscription: req.params.id } });

  res.json({
    message: `Course deleted`,
  });
});

module.exports = { createCourse, addLecture, deleteLecture, deleteCourse };
