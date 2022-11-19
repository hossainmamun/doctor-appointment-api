const mongoose = require("mongoose");

// professionals Schema
const professionalSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      require: true,
    },
    professional_name: {
      type: String,
      require: true,
    },
    professional_designation: {
      type: String,
      require: true,
    },
    professional_degree: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// export professional schema to professional controller
module.exports = mongoose.model("professional", professionalSchema);
