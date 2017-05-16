var {resolve} = require('path')
var express = require('express')

module.exports = function(app) {
  app.use(express.static(resolve(__dirname, '../build/')))
}
