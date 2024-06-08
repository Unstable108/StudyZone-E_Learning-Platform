const { instance } = require("../middlewares/razorPay");
const { TryCatch } = require("../middlewares/tryCatch");
const Courses = require("../models/Courses");
const { Payment } = require("../models/Payment");
const User = require("../models/User");
const crypto = require("crypto");

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

const getMyCourses = TryCatch(async (req, res) => {
  const courses = await Courses.find({ _id: req.user.subscription });

  res.json({
    courses,
  });
});

const checkOut = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);

  const course = await Courses.findById(req.params.id);

  if (user.subscription.includes(course._id)) {
    return res.status(400).json({
      message: `You already have this course`,
    });
  }

  const options = {
    ammount: Number(course.price * 100),
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  res.status(201).json({
    order,
    course,
  });
});

const paymentVerification = TryCatch(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.Razorpay_Key_Secret)
    .update(body)
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    const user = await User.findById(req.user._id);

    const course = await Courses.findById(req.params.id);

    user.subscription.push(course._id);

    await user.save();

    res.status(200).json({
      message: `Course Purchased Succesfully`,
    });
  } else {
    return res.status(400).json({
      message: `Payment Failed`,
    });
  }
});

module.exports = {
  getAllCourses,
  getSingleCourse,
  getMyCourses,
  checkOut,
  paymentVerification,
};
