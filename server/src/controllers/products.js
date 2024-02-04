const Product = require("../models/products");
require('dotenv').config()
const addNewProducts = async (req, res) => {
  if (req.file) {
    await Product.create({ ...req.body, image: `${process.env.BASE_URL}`+req.file.filename });
  } else {
    await Product.create(req.body);
  }
  return res.json({ msg: "Product Added Successfully" });
};

const getAllProducts = async (req, res) => {
  const productList = await Product.find();
  res.json(productList);
};

module.exports = { addNewProducts, getAllProducts };
