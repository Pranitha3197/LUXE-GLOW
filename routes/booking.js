const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");

// SAVE BOOKING
router.post("/save", async (req, res) => {

  try {

    const newBooking = new Booking(req.body);

    await newBooking.save();

    res.status(200).json({
      message: "Booking Saved Successfully"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Booking Failed"
    });
  }

});

module.exports = router;