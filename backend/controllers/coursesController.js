const { TryCatch } = require("../middlewares/tryCatch");
const Courses = require("../models/Courses");

const getAllCourses = TryCatch(async (req, res) => {
  const courses = await Courses.find();

  res.json({
    courses,
  });
});

const getSingleCourse = TryCatch(async (req, res) => {
  const singleCourse = await Courses.findById(req.params.id);

  res.json({
    singleCourse,
  });
});

module.exports = { getAllCourses, getSingleCourse };
