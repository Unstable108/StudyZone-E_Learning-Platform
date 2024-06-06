const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      console.log("Token not provided");
      return res.status(403).json({
        message: "Login Again",
      });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData._id);

    if (!req.user) {
      console.log("User not found for the provided token");
      return res.status(403).json({
        message: "Invalid token",
      });
    }

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({
      message: "Login First",
    });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: `You are not admin`,
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { isAuth, isAdmin };
