var app = require('express')()
var http = require('http').Server(app) // eslint-disable-line new-cap
var io = require('socket.io')(http)
var {resolve} = require('path')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('../webpack.config')

var compiler = require('webpack')(webpackConfig(process.env.NODE_ENV))

app.get('/', function(req, res){
  res.sendFile(resolve(__dirname, '../index.html'));
})

io.on('connection', function(socket){
  console.log('Socket connected')
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
  })
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

http.listen(3000, function () {
  console.log('Listening on port 3000!')
})
