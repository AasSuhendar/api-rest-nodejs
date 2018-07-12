const dotenv = require('dotenv').config()
module.exports = {
  database_dev: process.env.MONGO_URL_DEV,
  database_test: process.env.MONGO_URL_TEST,
  database_prod: process.env.MONGO_URL_PROD,
  mysql_host: process.env.MYSQL_HOST_DEV,
  mysql_user: process.env.MYSQL_USER,
  mysql_pass: process.env.MYSQL_PASS
}
