const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://pranitharamannagari_db_user:rqaUZCrVe9KkXq3z@cluster0.sgzrgm5.mongodb.net/luxeglow?retryWrites=true&w=majority");
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;