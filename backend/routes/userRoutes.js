const express = require("express");
const router = express.Router();
const {
  register,
  verifyUser,
  loginUser,
  myProfile,
} = require("../controllers/userController");
const { isAuth } = require("../middlewares/isAuth");

router.post("/user/register", register);
router.post("/user/verify", verifyUser);
router.post("/user/login", loginUser);
router.get("/user/me", isAuth, myProfile);

module.exports = router;
