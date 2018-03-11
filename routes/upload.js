var express = require('express')
var router = express.Router()
var Upload = require('../apps/controllers/Upload-controller')
var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() +'-'+ file.originalname)
  }
});
var upload = multer({storage: storage});

router.post('/single-file', upload.single('file_image'), function (req, res) {
  Upload.uploadFileSingle(req,res)
})

router.post('/multiple-file', upload.array('file_image',10), function (req, res) {
  Upload.uploadFileMulti(req,res)
})

module.exports = router
