const express = require("express");
const AlertUser = require("../models/AlertUser");
const FloodReport = require("../models/FloodReport");

const router = express.Router();

// View all Alerts Users
router.get("/users", async (req, res) => {
  const users = await AlertUser.find().sort({ createdAt: -1 });
  res.json(users);
});

// View all Flood Reports
router.get("/reports", async (req, res) => {
  const reports = await FloodReport.find().sort({ createdAt: -1 });
  res.json(reports);
});

module.exports = router;
