const express = require('express')
router = express.Router()
const {addNewProducts, getAllProducts} = require('../controllers/products')

router.post('/products', addNewProducts)
router.get('/products', getAllProducts)

module.exports = router