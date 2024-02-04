const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: String,
  category: String,
  stock: String,
  price: String,
  description: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
