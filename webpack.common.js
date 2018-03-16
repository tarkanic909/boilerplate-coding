const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const APP_SRC = path.resolve(__dirname, 'src');
const APP_DIST = path.resolve(__dirname, 'dist');

module.exports = {

  entry: {

    index: path.join(APP_SRC, 'index.js')

  },

  output: {

    path: APP_DIST,
    filename: '[name].js'

  },

  module: {

    rules: [

      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
                      fallback: 'style-loader',
                      use: ['css-loader', 'postcss-loader', 'stylus-loader'],
                    })

      },

    ]

  },

  plugins: [

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(APP_SRC, 'index.html')
    }),

    new ExtractTextPlugin('style.css')

  ]

}
