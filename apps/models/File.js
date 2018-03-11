var mongoose = require('mongoose')
var Schema = mongoose.Schema

var FileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Files', FileSchema)
