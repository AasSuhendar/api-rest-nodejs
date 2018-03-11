var async = require('async')
var File = require('../models/File')

module.exports = {
  uploadFileSingle: (req, res) => {
    console.log(req.file);

    var file = {
      name: req.file.filename,
      path: '/public/uploads/' + req.file.filename,
    }
    var newFile = new File(file)
    newFile.save((err, file) => {
      if (err) {
        res.status(500).json({
          status: false,
          code: 'INSERT-FILE',
          message: 'Insert new file failed',
          error: err
        })
      } else {
        res.status(200).json({
          status: true,
          code: 'INSERT-FILE',
          message: 'Insert new file successfuly',
          data: file
        })
      }
    })
  },
  uploadFileMulti: (req, res) => {
    console.log(req.files);
    let files = []
    async.each(req.files, (file, callback) => {
      console.log(file.filename);
      var file = {
        name: file.filename,
        path: '/public/uploads/' + file.filename,
      }
      files.push(file)
    })

    File.insertMany(files, (err, file) => {
      if (err) {
        res.status(500).json({
          status: false,
          code: 'INSERT-FILE',
          message: 'Insert new file failed',
          error: err
        })
      } else {
        res.status(200).json({
          status: true,
          code: 'INSERT-FILE',
          message: 'Insert new file successfuly',
          data: file
        })
      }
    })
  }
}