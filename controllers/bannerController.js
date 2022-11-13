const bannerSchema = require("../models/bannerModel.js");

// create banner
const createBanner = async (req, res) => {
  const { banner_image, banner_title, banner_detail } = req.body;
  try {
    const banner = await bannerSchema.create({
      banner_image,
      banner_title,
      banner_detail,
    });
    res.status(201).json(banner);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// get all banners
const getBannerList = async (req, res) => {
  try {
    const banners = await bannerSchema.find({});
    res.status(200).json(banners);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// get a single banner
const getSingleBanner = async (req, res) => {
  const bannerId = req.params.id;
  try {
    const banner = await bannerSchema.findById({ _id: bannerId });
    res.status(200).json(banner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a banner
const updateBanner = async (req, res) => {
  const bannerId = req.params.id;
  const { banner_image, banner_title, banner_detail } = req.body;

  try {
    const banner = await bannerSchema.findByIdAndUpdate(
      { _id: bannerId },
      { banner_image, banner_title, banner_detail },
      { returnOriginal: false }
    );

    res.status(200).json(banner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a banner
const deleteBanner = async (req, res) => {
  const bannerId = req.params.id;

  try {
    const banner = await bannerSchema.findByIdAndDelete({ _id: bannerId });
    res.status(200).json(banner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export banner controller to banner router
module.exports = {
  createBanner,
  getBannerList,
  getSingleBanner,
  updateBanner,
  deleteBanner,
};
