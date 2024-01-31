const Product = require('../models/products')


const addNewProducts = async(req, res)=>{
    await Product.create(req.body)
    return res.json({msg: 'Product added'})
}

module.exports = {addNewProducts}