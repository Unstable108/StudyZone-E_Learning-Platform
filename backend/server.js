const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

// app.use(bodyParser.json());
app.use(express.json());

// Import the Router files
const userRoutes = require("./routes/userRoutes");
// Use the Routers
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
