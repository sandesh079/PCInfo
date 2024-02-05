const Carousel = require("../models/carousel");
require('dotenv').config()
const addNewCarousel = async (req, res) => {
  if (req.file) {
    await Carousel.create({ ...req.body, image: `${process.env.BASE_URL}`+req.file.filename });
  } else {
    await Carousel.create(req.body);
  }
  return res.json({ msg: "Carousel Added Successfully" });
};


const getCarousel = async (req, res) => {
    const carousel = await Carousel.find({
      isActive:true
    });
    res.json(carousel);
  };
  module.exports = {
    getCarousel, addNewCarousel
  }