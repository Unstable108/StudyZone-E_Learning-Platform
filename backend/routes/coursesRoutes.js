const express = require("express");
const {
  getAllCourses,
  getSingleCourse,
  getMyCourses,
  checkOut,
  paymentVerification,
} = require("../controllers/coursesController");
const { isAuth } = require("../middlewares/isAuth");

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);
router.get("/mycourse", isAuth, getMyCourses);
router.post("/course/checkout/:id", isAuth, checkOut);
router.post("/verification/:id", isAuth, paymentVerification);

module.exports = router;
