const express = require("express");
const { isAuth, isAdmin } = require("../middlewares/isAuth");
const {
  createCourse,
  addLecture,
  deleteLecture,
  deleteCourse,
  getAllStats,
} = require("../controllers/adminController");
const uploadFiles = require("../middlewares/multer");
const router = express.Router();

router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLecture);
router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);
router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
router.get("/stats", isAuth, isAdmin, getAllStats);

module.exports = router;
