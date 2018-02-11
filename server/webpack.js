const webpackConfig = require('../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = function(app) {
  const webpack = require('webpack')
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    host: '0.0.0.0',
    inline: true,
    hot: true,
    contentBase: false,
    stats: 'errors-only',
    compress: true
  }))

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }))
}
