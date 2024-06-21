const Razorpay = require("razorpay");

//making payment integration
const instance = new Razorpay({
  key_id: process.env.Razorpay_Key_Id,
  key_secret: process.env.Razorpay_Key_Secret,
});

module.exports = { instance };
