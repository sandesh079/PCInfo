const multer = require('multer');
const path = require('path');

// Define storage settings
const storage = multer.diskStorage({
    destination: './public',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Define file filter
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|gif/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
};

// Initialize multer with storage and fileFilter
const uploadMiddleware = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = uploadMiddleware;

// const logMiddleware = (req,res,next)=>{
//    console.log(req.body)
//    if(req.body.fullName){
//     return res.send("not allowed")
//    }
//    next()
// }
// module.exports={logMiddleware,uploadMiddleware}