const express = require("express");
const {
  createAppointment,
  getAppointmentList,
  getAnAppointment,
  updateAnAppointment,
  deleteAnAppointment,
  getAppointmentByEmail,
} = require("../controllers/appointmentController.js");
const validation = require("../middlewares/validationMiddleware.js");
const { appointmentValidation } = require("../validation/validation.js");

// router form express.Router()
const appointmentRouter = express.Router();

// post appointments
appointmentRouter.post(
  "/",
  validation(appointmentValidation),
  createAppointment
);

// get appointments list
appointmentRouter.get("/", getAppointmentList);

// get single appointment by id
appointmentRouter.get("/:id", getAnAppointment);

// get appointment by email
appointmentRouter.post("/:email", getAppointmentByEmail);

// update an appointment
appointmentRouter.patch("/:id", updateAnAppointment);

// delete an appointment
appointmentRouter.delete("/:id", deleteAnAppointment);

// export router to server.js
module.exports = appointmentRouter;
