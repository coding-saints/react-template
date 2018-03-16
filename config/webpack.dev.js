const webpack = require('webpack');
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
    mode: development,

  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
  },
  devServer: {
    port: 3333,
    hot: true,
    inline: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    // It might be necessary to set a contentBase.
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});