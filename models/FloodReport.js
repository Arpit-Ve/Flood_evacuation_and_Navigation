const mongoose = require("mongoose");

const floodReportSchema = new mongoose.Schema({
  name: String,
  phone: String,
  description: String,
  location: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FloodReport", floodReportSchema);
