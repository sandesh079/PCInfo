const express = require('express')
router = express.Router()
const {addNewProducts, getAllProducts, getProductById, updateProductById, deleteProductById} = require('../controllers/products')

const uploadMiddleware = require('../middleware/fileUpload')
const {authentication,authorization} = require('../middleware/authmiddleware.js')

router.post('/products',authentication,authorization, uploadMiddleware.single('image'), addNewProducts)

router.get('/products', getAllProducts)

router.get('/products/:id', getProductById)

router.put('/products/:id',authentication,authorization, uploadMiddleware.single('image'), updateProductById)

router.delete('/products/:id',authentication,authorization, deleteProductById);

module.exports = router