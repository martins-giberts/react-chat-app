var {resolve} = require('path')
var webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./base.config.js')

module.exports = function (env) {
  return webpackMerge(commonConfig(), {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
    ],

    devtool: 'inline-source-map',

    devServer: {
      hot: true,
      contentBase: resolve(__dirname, '../'),
      publicPath: '/build/'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NamedModulesPlugin(), // TODO: see why its broken
    ]
  })
}
