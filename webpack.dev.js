const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const APP_SRC = path.resolve(__dirname, 'src');
const APP_DIST = path.resolve(__dirname, 'dist');

module.exports = merge(common, {

  module: {

    rules: [

      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: path.join('fonts', '[name].[ext]')
          }
        }]
      },

      {
        test: /\.png|jpg|jpeg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: path.join('images', '[name].[ext]')
          }
        }]
      }

    ]

  },

  devServer: {

    contentBase: APP_DIST,
    compress: true,
    stats: 'minimal',
    useLocalIp: true,
    host: '0.0.0.0',

  }

});
