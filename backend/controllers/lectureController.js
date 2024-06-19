const { TryCatch } = require("../middlewares/tryCatch");
const Lecture = require("../models/Lecture");
const User = require("../models/User");

//fetch all the lectures
const fetchLectures = TryCatch(async (req, res) => {
  const lectures = await Lecture.find({ course: req.params.id });

  const user = await User.findById(req.user._id);

  if (user.role === "admin") {
    return res.json({ lectures });
  }
  if (!user.subscription || !user.subscription.includes(req.params.id)) {
    return res.status(400).json({
      message: `You have not subscribed to this course`,
    });
  }
  res.json({ lectures });
});

//get single lecture
const fetchLecture = TryCatch(async (req, res) => {
  const lecture = await Lecture.findById(req.params.id);
  const user = await User.findById(req.user._id);

  if (user.role === "admin") {
    return res.json({ lecture });
  }
  if (!user.subscription || !user.subscription.includes(lecture.course)) {
    return res.status(400).json({
      message: `You have not subscribed to this course`,
    });
  }
  res.json({ lecture });
});

module.exports = { fetchLectures, fetchLecture };
