var {resolve} = require('path')

module.exports = function(app) {
  app.get('*', function(req, res){
    res.sendFile(resolve(__dirname, '../index.html'))
  })
}
