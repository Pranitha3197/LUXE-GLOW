const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customer: String,
  service: String,
  price: String,
  date: String,
  time: String,
  payment: String
});

module.exports = mongoose.model("Booking", bookingSchema);