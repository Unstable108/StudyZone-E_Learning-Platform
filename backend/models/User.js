// Import the Mongoose library for working with MongoDB
const mongoose = require("mongoose");

// Define a schema (blueprint) for user documents in the database
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    subscription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true } // Automatically add timestamps (created and updated) to each user document
);

// Create a user model using the defined schema
const User = mongoose.model("user", userSchema);
module.exports = User;
