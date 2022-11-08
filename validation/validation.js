const yup = require("yup");

// user signup validation
const signupValidation = yup.object().shape({
  user_name: yup.string().max(25).required("user name is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().min(6).max(15).required("password is required"),
});

// user login validation
const loginValidation = yup.object().shape({
  email: yup.string().email().required("email is required"),
  password: yup.string().min(6).max(15).required("password is required"),
});

// appointment validation
const appointmentValidation = yup.object().shape({
  patient_name: yup.string().max(20).required("patient name is required"),
  mobile_number: yup
    .string()
    .min(11)
    .max(11)
    .required("phone number must 11 digit"),
  email: yup.string().email().required("email must be a valid email"),
  date_of_birth: yup.string().required(),
  branch: yup.string().required("branch is required"),
  department: yup.string().required("department is required"),
  professionals: yup.string().required("professional is required"),
  appointment_date: yup.string().required("appointment date is required"),
  appointment_time: yup.string().required("appointment time is required"),
});

// export validations
module.exports = {
  signupValidation,
  loginValidation,
  appointmentValidation,
};
