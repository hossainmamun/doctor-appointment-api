require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// express app
const app = express();

// use middleware
app.use(cors());
app.use(express.json());

// server route
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "<h>welcome to doctor appointment</h>",
    today: new Date().toLocaleDateString(),
  });
});

// database connection
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("database connected");
    // app listen
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`server is running on: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });