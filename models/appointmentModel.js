const mongoose = require("mongoose");

// mongoose schema
const appointmentSchema = new mongoose.Schema(
  {
    patient_name: {
      type: String,
      require: true,
    },
    mobile_number: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    date_of_birth: {
      type: String,
      require: true,
    },
    branch: {
      type: String,
      require: true,
    },
    department: {
      type: String,
      require: true,
    },
    professionals: {
      type: String,
      require: true,
    },
    appointment_date: {
      type: String,
      require: true,
    },
    appointment_time: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// export schema to appointment model
module.exports = mongoose.model('appointment', appointmentSchema);
