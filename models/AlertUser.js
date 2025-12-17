const mongoose = require("mongoose");

const alertUserSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  location: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("AlertUser", alertUserSchema);
