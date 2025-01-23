const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/expressjs");
    console.log(`Database Connect on: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Database error: ${error.message}`);
  }
};

module.exports = connectDB;
