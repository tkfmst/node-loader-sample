const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./src/js/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};
