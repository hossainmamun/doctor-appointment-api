require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// routers
const userRouter = require("./routes/userRoute.js");
const appointmentRouter = require("./routes/appointmentRoute.js");
const professionalRouter = require("./routes/professionalRoute.js");
const bannerRouter = require("./routes/bannerRouter.js");

// express app
const app = express();

// use middleware
app.use(cors());
app.use(express.json());

// server route
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "welcome to doctor appointment",
    today: new Date().toLocaleDateString(),
  });
});

// use routers
app.use("/api/user", userRouter);
app.use("/api/patient/appointment", appointmentRouter);
app.use("/api/professional", professionalRouter);
app.use("/api/banner", bannerRouter);

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
