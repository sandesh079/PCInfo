const express = require('express')
router = express.Router()
const {addNewProducts, getAllProducts} = require('../controllers/products')
const uploadMiddleware = require('../middleware/fileUpload')

router.post('/products',uploadMiddleware.single('image'), addNewProducts)

router.get('/products', getAllProducts)

module.exports = router