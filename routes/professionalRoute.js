const express = require("express");
const {
  createProfessional,
  getProfessionalList,
  getSingleProfessional,
  updateProfessional,
  deleteProfessional,
} = require("../controllers/professionalController.js");
const validation = require("../middlewares/validationMiddleware.js");
const { professionalValidation } = require("../validation/validation.js");

// express Router()
const expressRouter = express.Router();

// post professional
expressRouter.post("/", validation(professionalValidation), createProfessional);

// get all professionals
expressRouter.get("/", getProfessionalList);

// get a professional by id
expressRouter.get("/:id", getSingleProfessional);

// update a professional
expressRouter.patch("/:id", updateProfessional);

// delete a professional
expressRouter.delete("/:id", deleteProfessional);

module.exports = expressRouter;
