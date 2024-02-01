const Product = require('../models/products')


const addNewProducts = async(req, res)=>{
    await Product.create(req.body)
    return res.json({msg: 'Product added'})
}

const getAllProducts = async(req, res)=>{
    const productList = await Product.find()
    res.json(productList)
    
}

module.exports = {addNewProducts, getAllProducts}