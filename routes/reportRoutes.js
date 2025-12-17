const express = require("express");
const multer = require("multer");
const FloodReport = require("../models/FloodReport");

const router = express.Router();

// Upload Setting
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Submit Report
router.post("/report", upload.single("image"), async (req, res) => {
  try {
    const report = await FloodReport.create({
      name: req.body.name,
      phone: req.body.phone,
      description: req.body.description,
      location: req.body.location,
      image: req.file.filename
    });

    res.status(201).json({ message: "Flood Report Submitted", report });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
