var socket = require('socket.io')

module.exports = function(app) {
  var io = socket(app)

  io.on('connection', function(socket){
    console.log('Socket connected')
    socket.on('chat message', function(msg){
      io.emit('chat message', msg)
    })
  })
}
