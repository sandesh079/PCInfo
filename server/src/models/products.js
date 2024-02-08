const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: String,
  brand: String,
  category: String,
  storage: String,
  ram: String,
  processor: String,
  stock: String,
  price: String,
  description: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
