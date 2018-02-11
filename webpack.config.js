const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: ['react-hot-loader/patch', './index.js']
  },

  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devServer: {
    host: '0.0.0.0',
    inline: true,
    hot: true,
    contentBase: false,
    stats: 'errors-only',
    compress: true
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test : /\.jsx?/,
        include : [path.resolve(__dirname, "src"), path.resolve(__dirname, "content")],
        use : {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
      filename: path.resolve(__dirname, './build/index.html'),
    }),
    new CleanWebpackPlugin(['build']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
