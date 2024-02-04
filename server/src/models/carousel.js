const mongoose = require("mongoose");
const { Schema } = mongoose;

const carouselSchema = new Schema({
  title: String,
  image: String,
  isActive:Boolean
});

const carousel = mongoose.model("carousel", carouselSchema);
module.exports = carousel;
