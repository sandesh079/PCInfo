const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  category: String,
  isSubCategory: Boolean,
  subCategory: String
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;