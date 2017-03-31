var express = require('express')
var http = require('http')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')

var app = express()
var compiler = webpack(webpackConfig(process.env.NODE_ENV))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

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

var httpApp = http.Server(app) // eslint-disable-line new-cap
httpApp.listen(3000, function () {
  console.log('Listening on port 3000!')
})
