const dotenv = require('dotenv').config()

module.exports = {
  database_dev: process.env.MONGO_URL_DEV,
  //database_test: process.env.MONGO_URL_TEST,
  database_test: "mongodb://playcourt:playcourtTelkom@mongodb-for-testing-api.apps.playcourt.id:30308/test-db",
  database_prod: process.env.MONGO_URL_PROD
}
