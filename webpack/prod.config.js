var webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./base.config.js')

module.exports = function (env) {
   return webpackMerge(commonConfig(), {
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false
        })
    ]
  })
}
