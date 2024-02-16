const Product = require("../models/products");
require('dotenv').config()
const addNewProducts = async (req, res) => {
  try {
    if (req.file) {
      await Product.create({ ...req.body, image: `${process.env.BASE_URL}`+req.file.filename });
    } else {
      await Product.create(req.body);
    }
    return res.json({ msg: "Product Added Successfully" });
  } catch (error) {
    throw error
  }

};

const getAllProducts = async (req, res) => {
  const productList = await Product.find();
  res.json(productList);
};

const getProductById = async (req, res)=>{
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    // res.json(product)

    if (!product){
      return res.status(404).json({
        message: "No product found"
      })
    }
    res.json(product)
  } catch (error){
    console.log(error)
  }
  
}

const updateProductById = async (req, res) => {
  try {
    const {id} = req.params
    const payload = req.body;
    let updateProduct;
    if(req.file){
    updateProduct =   await Product.findByIdAndUpdate(id,{...payload,image: `${process.env.BASE_URL}`+req.file.filename})
    }
    else{
      updateProduct =   await Product.findByIdAndUpdate(id,req.body)

    }
  
    if (!updateProduct) {
      return res.status(404).json({
        message: "No Product Found"
      })
    }

    res.status(200).json({
      message: "Product Updated Successfully",
      updateProduct
    })
  } catch (error) {
    console.error("Error updating product", error)
    res.status(500).json({ message: 'Internal server error' });
  }
}

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "No product found with the provided ID",
      });
    }

    res.json({
      message: "Product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { addNewProducts, getAllProducts, getProductById, updateProductById, deleteProductById};
