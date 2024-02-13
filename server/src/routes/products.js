const express = require('express')
router = express.Router()
const {addNewProducts, getAllProducts, getProductById} = require('../controllers/products')

const uploadMiddleware = require('../middleware/fileUpload')
const {authentication,authorization} = require('../middleware/authmiddleware.js')

router.post('/products',authentication,authorization, uploadMiddleware.single('image'), addNewProducts)

router.get('/products', getAllProducts)

router.get('/products/:id', getProductById)

module.exports = router