const express = require("express");
const router = express.Router();
const User = require("../models/User");

// LOGIN / SAVE USER
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = new User({ username, password });
    await user.save();

    res.json({ message: "User saved successfully ✅", user });
  } catch (error) {
    res.status(500).json({ error: "Error saving user ❌" });
  }
});

module.exports = router;