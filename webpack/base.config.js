var {resolve} = require('path')

var BUILD_DIR = resolve(__dirname, '../build')
var APP_DIR = resolve(__dirname, '../app')

module.exports = function (env) {
  return {
    entry: [
      'react-hot-loader/patch',
      APP_DIR + '/index.js',
    ],

    output: {
      path: BUILD_DIR,
      publicPath: '/build/',
      filename: 'app.js',
      sourceMapFilename: '[name].map'
    },

    resolve: {
      extensions: [".js", ".jsx", ".css"]
    },

    context: resolve(__dirname, 'app'),

    module: {
      loaders : [
        {
          test : /\.jsx?/,
          include : APP_DIR,
          loaders : [
            'babel-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader?modules',
            'postcss-loader',
          ],
        },
      ]
    },
  }
}
