var webpackConfig = require('../webpack.config')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = function(app) {
  var compiler = require('webpack')(webpackConfig(process.env.NODE_ENV))

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/build/',
    inline: true,
    hot: true,
    stats: {colors: true},
    historyApiFallback: true,
  }))

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }))
}
