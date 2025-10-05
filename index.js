require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const blogrouter = require("./routes/blog");
const app = express();
app.use(express.json());

const dataBaseUrl = process.env.DATABASE_URL;

app.use("/api/blogs", blogrouter);

mongoose
  .connect(dataBaseUrl)
  .then(() => {
    console.log("mongooes connect");
    app.listen(3000, () => {
      console.log("Server running on address http://localhost:3000");
    });
  })
  .catch((e) => {
    console.log("mongooes connect error", e);
  });
