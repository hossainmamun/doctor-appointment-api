const yup = require("yup");

// user signup validation
export const signupValidation = yup.object().shape({
  user_name: yup.string().max(25).required("user name is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
});

// export validations
module.export = {
  signupValidation,
};
