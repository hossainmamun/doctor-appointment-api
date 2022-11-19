const bannerSchema = require("../models/bannerModel.js");

// create banner
const createBanner = async (req, res) => {
  const { imgUrl, banner_title, banner_detail } = req.body;

  try {
    const findBanner = await bannerSchema.find({});
    if (findBanner.length === 0) {
      const banner = await bannerSchema.create({
        imgUrl,
        banner_title,
        banner_detail,
      });
      res.status(201).json(banner);
    } else {
      res.status(401).json({ error: "Sorry multiple banner is not allow" });
    }
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
  const { imgUrl, banner_title, banner_detail } = req.body;

  try {
    const banner = await bannerSchema.findByIdAndUpdate(
      { _id: bannerId },
      { imgUrl, banner_title, banner_detail },
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
