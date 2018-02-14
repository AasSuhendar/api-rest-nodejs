var Promise = require('bluebird')
var env = require('../config/env')
var mongoose = require('mongoose')
var logger = require('morgan')
var loggerFile = require('../config/logger')

Promise.promisifyAll(mongoose)
// mongoose.Promise = global.Promise

var db = mongoose.connection

let confDB = function (app) {
  db.once('open', function () {
    loggerFile.info('Connection open')
  })

  db.on('connecting', function () {
    loggerFile.info('Connecting')
  })

  if (process.env.NODE_ENV === 'test') {
    mongoose.connect(env.database_test)
    db.on('connected', () => {
      loggerFile.info('Mongoose default connection open to (test) :' + env.database_test)
    })
  } else if (process.env.NODE_ENV === 'dev') {
    mongoose.connect(env.database_dev)
    db.on('connected', function () {
      loggerFile.info('Mongoose default connection open to (dev) :' + env.database_dev)
    })
    app.use(logger('dev'))
  } else if (process.env.NODE_ENV === 'prod') {
    mongoose.connect(env.database_prod)
    // db.on('connected')
    app.use(logger('combined'))
  }

  db.on('error', function (error) {
    loggerFile.error('##>> Error in MongoDb connection : ' + error)
    mongoose.disconnect()
  })
}

module.exports = confDB
