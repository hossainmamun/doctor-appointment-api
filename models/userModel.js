const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// user schema
const userModel = new mongoose.Schema(
  {
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
    isAdmin: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true }
);

// user statics signup function
userModel.statics.signup = async function (
  user_name,
  email,
  password,
  isAdmin
) {
  // check existing email
  const existing = await this.findOne({ email: email });
  if (existing) {
    throw new Error("email already in used");
  }

  // password hashing method
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await this.create({
    user_name,
    email,
    password: hashPassword,
    isAdmin,
  });

  return user;
};

// user static login function
userModel.statics.login = async function (email, password) {
  // check user is exist
  const user = await this.findOne({ email: email });
  if (!user) {
    throw new Error("Invalid action");
  }

  // check user password is correct
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    throw new Error("Invalid action");
  }

  return user;
};

// export user schema
module.exports = mongoose.model("user", userModel);
