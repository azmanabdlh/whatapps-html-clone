const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: "./index.ts",  
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/        
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "example",
      template: './template.html',
      minify: true,
    }),    
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    static: path.join(__dirname, "public"),
    compress: false,
    port: 9191,
  },
}