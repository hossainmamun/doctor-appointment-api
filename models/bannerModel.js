const mongoose = require("mongoose");

// banner Schema
const bannerSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      require: true,
    },
    banner_title: {
      type: String,
      require: true,
    },
    banner_detail: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('banner', bannerSchema)