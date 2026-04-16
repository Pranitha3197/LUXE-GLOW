const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/booking");

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);

app.get("/", (req, res) => {
  res.send("LuxeGlow Backend Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
