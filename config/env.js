const dotenv = require('dotenv').config()

module.exports = {
  database_dev: process.env.MONGO_URL_DEV,
  database_test: process.env.MONGO_URL_TEST,
  database_prod: process.env.MONGO_URL_PROD
}
