const express = require('express')
router = express.Router()
const {addNewCategories, getAllCategories} = require('../controllers/categories.controller')


router.post('/categories', addNewCategories)

router.get('/categories', getAllCategories)

module.exports = router