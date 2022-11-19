const professionalSchema = require("../models/professionalModel.js");

// create professionals
const createProfessional = async (req, res) => {
  const {
    imgUrl,
    professional_name,
    professional_designation,
    professional_degree,
  } = req.body;
  
  try {
    const professional = await professionalSchema.create({
      imgUrl,
      professional_name,
      professional_designation,
      professional_degree,
    });
    res.status(201).json(professional);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// get professional list
const getProfessionalList = async (req, res) => {
  try {
    const professionals = await professionalSchema.find({});
    res.status(200).json(professionals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a professional
const getSingleProfessional = async (req, res) => {
  const professionalId = req.params.id;
  try {
    const professional = await professionalSchema.findById({
      _id: professionalId,
    });
    res.status(200).json(professional);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a professional
const updateProfessional = async (req, res) => {
  const professionalId = req.params.id;
  const {
    imgUrl,
    professional_name,
    professional_designation,
    professional_degree,
  } = req.body;

  try {
    const professional = await professionalSchema.findByIdAndUpdate(
      { _id: professionalId },
      {
        imgUrl,
        professional_name,
        professional_designation,
        professional_degree,
      },
      { returnOriginal: false }
    );
    res.status(200).json(professional);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a professional
const deleteProfessional = async (req, res) => {
  const professionalId = req.params.id;
  try {
    const professional = await professionalSchema.findByIdAndDelete({
      _id: professionalId,
    });
    res.status(200).json(professional);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProfessional,
  getProfessionalList,
  getSingleProfessional,
  updateProfessional,
  deleteProfessional,
};
