const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
require("dotenv").config();

// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

// Import the Router files
const userRoutes = require("./routes/userRoutes");
const coursesRoutes = require("./routes/coursesRoutes");
const adminRoutes = require("./routes/adminRoutes");
const lectureRoutes = require("./routes/lectureRoutes");

// Use the Routers
app.use("/api", userRoutes);
app.use("/api", coursesRoutes);
app.use("/api", adminRoutes);
app.use("/api", lectureRoutes);

const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});
