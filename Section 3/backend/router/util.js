const multer = require('multer');
const router = require('express').Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname)
    }
});
