const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected Successfully 🚀");
  } catch (err) {
    console.error("MongoDB Connection Failed ❌", err.message);
  }
};

module.exports = connectDB;
