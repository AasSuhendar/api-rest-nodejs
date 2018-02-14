const winston = require('winston')
winston.emitErrs = true

const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'debug',
      filename: './logs/api-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: true
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
})

module.exports = logger
module.exports.stream = {
  write: (message, encoding) => {
    logger.info(message)
  }
}
