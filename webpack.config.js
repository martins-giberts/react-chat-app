var {resolve} = require('path')
var webpack = require('webpack')

var BUILD_DIR = resolve(__dirname, 'build')
var APP_DIR = resolve(__dirname, 'app')

const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.js',
  ],

  output: {
    path: BUILD_DIR,
    publicPath: '/build/',
    filename: 'app.js'
  },

  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },

  context: resolve(__dirname, 'app'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, ''),
    publicPath: '/build/'
  },

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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
  ]
}

module.exports = config
