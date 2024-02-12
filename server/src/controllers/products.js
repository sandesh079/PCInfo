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

const getProductById = async (req, res)=>{
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    res.json(product)

    if (!product){
      return res.status(404).json({
        message: "No product found"
      })
    }
    res.status(200).json({
      message: "Product fetched successfully",
      product
    })
  } catch (error){
    console.log(error)
  }
  
}



module.exports = { addNewProducts, getAllProducts, getProductById };
