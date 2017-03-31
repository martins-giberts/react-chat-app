var {resolve} = require('path')
var webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./base.config.js')

module.exports = function (env) {
  return webpackMerge(commonConfig(), {
    entry: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    ],

    output: {
     filename: '[name].js',
     sourceMapFilename: '[name].map'
    },

    devtool: 'inline-source-map',

    devServer: {
      hot: true,
      contentBase: resolve(__dirname, '../'),
      publicPath: '/build/',
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoErrorsPlugin(),
      // new webpack.NamedModulesPlugin(), // TODO: see why its broken
    ]
  })
}
