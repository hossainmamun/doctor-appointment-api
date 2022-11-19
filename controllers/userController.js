require("dotenv").config();
const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

// create token
const createToken = (_id) => {
  const token = jwt.sign(
    { _id },
    `${process.env.DOCTOR_APPOINTMENT_SECRET_TOKEN}`,
    {
      expiresIn: "3d",
    }
  );
  return token;
};

// signup controller
const userSignup = async (req, res) => {
  const { user_name, email, password, isAdmin } = req.body;

  try {
    const user = await userModel.signup(user_name, email, password, isAdmin);
    const token = createToken(user._id);
    res.status(201).json({ user_name, email, isAdmin, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// login controller
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login(email, password);
    const token = createToken(user._id);
    const user_name = user.user_name;
    const isAdmin = user.isAdmin;
    res.status(200).json({ user_name, email, isAdmin, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete user
const deleteUser = async (req, res) => {
  const email = req.params.email;
  try {
    const user = await userModel.findOneAndDelete({ email: email });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export controller function
module.exports = {
  userSignup,
  userLogin,
  deleteUser,
};
