const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

  module: {

    rules: [

      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: path.join('fonts', '[name].[hash:8].[ext]')
          }
        }]
      },

      {
        test: /\.png|jpg|jpeg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: path.join('images', '[name].[hash:8].[ext]')
          }
        }]
      }

    ]

  }

});
