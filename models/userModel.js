const mongoose = require("mongoose");

// user schema
const userModel = new mongoose.Schema({
  user_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// user statics signup function

// export user schema
module.exports = mongoose.model("user", userModel);
