/* global __dirname */
const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
//   entry: {
//     "app": path.resolve(__dirname, "../src/index")
//   },
//   output: {
//     path: path.resolve(__dirname, "../build"),
//   },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: 
        './src/public/index.html', 
         filename: './index.html'
        })

  ]
};