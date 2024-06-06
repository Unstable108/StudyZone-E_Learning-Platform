const express = require("express");
const {
  getAllCourses,
  getSingleCourse,
} = require("../controllers/coursesController");

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);

module.exports = router;
