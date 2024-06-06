const multer = require("multer");
const { v4: uuid } = require("uuid");

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const id = uuid();

    const extName = file.originalname.split(".").pop();

    const fileName = `${id}.${extName}`;

    cb(null, fileName);
  },
});

// Create the multer instance
const uploadFiles = multer({ storage }).single("file");

module.exports = uploadFiles;
