const express = require("express");
const { isAuth } = require("../middlewares/isAuth");
const {
  fetchLectures,
  fetchLecture,
} = require("../controllers/lectureController");

const router = express.Router();

router.get("/lectures/:id", isAuth, fetchLectures);
router.get("/lecture/:id", isAuth, fetchLecture);

module.exports = router;
