const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../middlewares/sendMail");
const { TryCatch } = require("../middlewares/tryCatch");

const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    user = new User({
      name,
      email,
      password: hashPassword,
    });

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    const activationToken = jwt.sign({ user, otp }, process.env.JWT_SECRET, {
      expiresIn: "5m",
    });

    const data = { name, otp };
    await sendMail(email, "OTP for E-Learning", data);

    res.status(200).json({
      message: "OTP sent to your email",
      activationToken,
    });
  } catch (error) {
    console.error("Error occurred during registration:", error); // Log the error
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const verifyUser = TryCatch(async (req, res) => {
  const { otp, activationToken } = req.body;

  const verify = jwt.verify(activationToken, process.env.JWT_SECRET);

  if (!verify) {
    return res.status(400).json({
      message: "OTP Expired",
    });
  }

  if (verify.otp !== otp) {
    return res.status(400).json({
      message: "Wrong OTP",
    });
  }

  await User.create({
    name: verify.user.name,
    email: verify.user.email,
    password: verify.user.password,
  });

  res.json({
    message: `User Registered`,
  });
});

const loginUser = TryCatch(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }); // Correct method to find user by email

    if (!user) {
      return res.status(400).json({
        message: "No user with this email exists",
      });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({
        message: "Wrong Password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "20d",
    });

    res.json({
      message: `Welcome back ${user.name}`,
      token,
      user,
    });
  } catch (error) {
    console.error("Error occurred during login:", error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const myProfile = TryCatch(async (req, res) => {
  try {
    const user = await User.findById(req.user._id); // Correct method

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({ user });
    console.log(`Profile data fetched`);
  } catch (error) {
    console.error("Error occurred while fetching profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { register, verifyUser, loginUser, myProfile };
