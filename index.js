const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const blogrouter = require("./routes/blog");
const app = express();

app.use(express.json());

app.use("/api/blogs", blogrouter);

app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

console.log(process.env.DATABASE_URL);
console.log("Env:", process.env);


mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("MongoDB connected successfully ✅"))
  .catch((err) => console.error("MongoDB connection error ❌", err));

module.exports = app;
