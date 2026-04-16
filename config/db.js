const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pranitharamannagari_db_user:rqaUZCrVe9KkXq3z@cluster0.sgzrgm5.mongodb.net/luxeglow"
    );
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;