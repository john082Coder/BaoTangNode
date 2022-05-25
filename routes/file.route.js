const express = require("express");

const router = express.Router();

const File = require("../models/file.model");
const upload = require("../multer");
// File CRUD

/* get all data */
router.get("/", async (req, res) => {
  try {
    const result = await (await File.find()).reverse(); // db query

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something to worry about",
    });
  }
});

router.post("/", upload.single("myFile"), async (req, res, next) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({message: "please upload a file"});
  }

  const imagepost = {
    image: file.path,
    originalName: file.originalname,
  };
  const savedimage = await File.create(imagepost);
  res.json(savedimage);
});

module.exports = router;
