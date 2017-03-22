var {resolve} = require('path')
var webpack = require('webpack')

var BUILD_DIR = resolve(__dirname, 'build')
var APP_DIR = resolve(__dirname, 'app')

const config = {
  devtool: "inline-source-map",
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: "app.js"
  },
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  devServer: {
    watchOptions: {
      poll: true,
    }
  }
}

module.exports = config
