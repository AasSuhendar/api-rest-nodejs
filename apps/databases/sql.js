const Sequelize = require('sequelize')
var loggerFile = require("../config/logger");

const sequelize = new Sequelize(
    'sample_db',
    'root',
    'AZX445mn',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        operatorsAliases: false
    }
)

sequelize
    .authenticate()
    .then(() => {
        loggerFile.info("Connection has been established successfully.");
    })
    .catch(err => {
        loggerFile.error('Unable to connect to the database:', err.message)
    })

module.exports = sequelize
