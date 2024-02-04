const { addNewCarousel, getCarousel } = require('../controllers/carousel.controller')
const uploadMiddleware = require('../middleware/fileUpload')

const router  = require('express').Router()

router.post('/carousel',uploadMiddleware.single('image')
,addNewCarousel)
router.get('/carousel',getCarousel)
module.exports  = router