require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const requestRoutes = require("./routes/requests");

const app = express();

/* -------------------- MIDDLEWARE -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- DATABASE -------------------- */
connectDB();

/* -------------------- ROUTES -------------------- */
app.use("/auth", authRoutes);
app.use("/api/requests", requestRoutes);

/* -------------------- TEST ROUTE -------------------- */
app.get("/", (req, res) => {
  res.send("CampusConnect Backend Running");
});

/* -------------------- SERVER -------------------- */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});