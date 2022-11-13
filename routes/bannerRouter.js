const express = require("express");
const {
  createBanner,
  getBannerList,
  getSingleBanner,
  updateBanner,
  deleteBanner,
} = require("../controllers/bannerController.js");
const validation = require("../middlewares/validationMiddleware.js");
const { bannerValidation } = require("../validation/validation.js");

// express Router
const bannerRouter = express.Router();

// post banner
bannerRouter.post("/", validation(bannerValidation), createBanner);

// get all banner
bannerRouter.get("/", getBannerList);

// get single banner
bannerRouter.get("/:id", getSingleBanner);

// update a banner
bannerRouter.patch("/:id", updateBanner);

// delete banner
bannerRouter.delete("/:id", deleteBanner);

module.exports = bannerRouter;
