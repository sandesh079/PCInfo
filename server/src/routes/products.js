const express = require('express')
router = express.Router()
const {addNewProducts, getAllProducts, getProductById, deleteProductById} = require('../controllers/products')

const uploadMiddleware = require('../middleware/fileUpload')
const {authentication,authorization} = require('../middleware/authmiddleware.js')

router.post('/products',authentication,authorization, uploadMiddleware.single('image'), addNewProducts)

router.get('/products', getAllProducts)

router.get('/products/:id', getProductById)

router.delete('/products/:id',authentication,authorization, deleteProductById);

module.exports = router