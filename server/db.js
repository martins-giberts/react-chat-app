var Sequelize = require('sequelize')
var config = require('./config').db

module.exports = new Sequelize(
  config.schema,
  config.user,
  config.password,
  {
    host: config.host,
    "dialect": config.dialect,
  }
)
