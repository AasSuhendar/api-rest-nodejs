const dotenv = require('dotenv').config()

module.exports = {
  database_dev: process.env.MONGO_URL_DEV,
  //database_test: process.env.MONGO_URL_TEST,
  database_test: "mongodb://playcourt:playcourtTelkom@mongodb-todos-demoplaycourt.apps.playcourt.id:30845/db-todos",
  database_prod: process.env.MONGO_URL_PROD
}
