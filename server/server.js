var app = require('express')()
var http = require('http').Server(app) // eslint-disable-line new-cap

require('./static')(app)
require('./webpack')(app)
require('./template')(app)
require('./io')(http)

http.listen(3000, function () {
  console.log('Listening on port 3000!')
})
