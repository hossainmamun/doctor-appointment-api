const express = require("express");
const {
  userSignup,
  userLogin,
  deleteUser,
} = require("../controllers/userController.js");
const validation = require("../middlewares/validationMiddleware.js");
const {
  signupValidation,
  loginValidation,
} = require("../validation/validation.js");

// express router
const userRouter = express.Router();

// signup user route
userRouter.post("/signup", validation(signupValidation), userSignup);

// login user route
userRouter.post("/login", validation(loginValidation), userLogin);

// delete user route
userRouter.delete("/:email", deleteUser);

// export router to server.js
module.exports = userRouter;
