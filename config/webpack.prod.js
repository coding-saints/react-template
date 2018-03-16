const commonConfig = require("./webpack.common");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = merge(commonConfig, {
  output: {
    filename: "[name].bundle.min.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    new UglifyJsWebpackPlugin(),
    extractSass
  ]
});