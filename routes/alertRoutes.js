const express = require("express");
const router = express.Router();
const AlertUser = require("../models/AlertUser");

router.post("/register", async (req, res) => {
  try {
    const user = await AlertUser.create(req.body);
    res.status(201).json({ message: "User Registered for Alerts", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
