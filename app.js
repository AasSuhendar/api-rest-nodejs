var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var mongooseConf = require('./helper/mongooseConf')
var loggerFile = require('./config/logger')
var index = require('./routes/index')
var todos = require('./routes/todos')

var app = express()
var conDB = new mongooseConf(app)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)
app.use('/api/todo-list', todos)

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).send({
    status: false,
    code: 'NOT-FOUND',
    message: 'Endpoint notfound'
  })
  loggerFile.warn('Unauthorize access API')
})

// error handler
app.use(function (err, req, res) {
  res.status(500).send({
    status: false,
    code: 'ERROR',
    message: 'Server error',
    error: err.message
  })
  loggerFile.error('Internal Server Error')
})

module.exports = app
