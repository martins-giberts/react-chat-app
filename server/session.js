var session = require('express-session')
var SequelizeStore = require('connect-session-sequelize')(session.Store)
var dbConnection = require('./db')
var config = require('./config').session

module.exports = function(app) {
  var store = new SequelizeStore({db: dbConnection})
  store.sync()
  app.use(session({
    secret: config.secret,
    store: store,
    proxy: true
  }))
}
