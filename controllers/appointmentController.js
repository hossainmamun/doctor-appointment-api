const appointmentSchema = require("../models/appointmentModel.js");

// create appointment
const createAppointment = async (req, res) => {
  const {
    patient_name,
    mobile_number,
    email,
    date_of_birth,
    branch,
    department,
    professionals,
    appointment_date,
    appointment_time,
    gender
  } = req.body;
  try {
    const appointment = await appointmentSchema.create({
      patient_name,
      mobile_number,
      email,
      date_of_birth,
      branch,
      department,
      professionals,
      appointment_date,
      appointment_time,
      gender
    });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// get appointments
const getAppointmentList = async (req, res) => {
  try {
    const appointments = await appointmentSchema.find({});
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single appointment by user id
const getAnAppointment = async (req, res) => {
  const patientId = req.params.id;
  try {
    const appointment = await appointmentSchema.findById({ _id: patientId });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update appointment by user id
const updateAnAppointment = async (req, res) => {
  const patientId = req.params.id;
  const {
    patient_name,
    mobile_number,
    email,
    date_of_birth,
    branch,
    department,
    professionals,
    appointment_date,
    appointment_time,
  } = req.body;

  try {
    const appointment = await appointmentSchema.findByIdAndUpdate(
      { _id: patientId },
      {
        patient_name,
        mobile_number,
        email,
        date_of_birth,
        branch,
        department,
        professionals,
        appointment_date,
        appointment_time,
      },
      { returnOriginal: false }
    );
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an appointment by id
const deleteAnAppointment = async (req, res) => {
  const patientId = req.params.id;
  try {
    const appointment = await appointmentSchema.findByIdAndDelete({
      _id: patientId,
    });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export controller to appointment route
module.exports = {
  createAppointment,
  getAppointmentList,
  getAnAppointment,
  updateAnAppointment,
  deleteAnAppointment,
};
