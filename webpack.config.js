/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-12-14 17:20:25
 * @LastEditors: 郭军伟
 * @LastEditTime: 2020-12-14 18:26:31
 */

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[main].[contenthash:8].js'
  },
  devServer: {
    host: 'localhost',
    port: 1000,
    open: true
  },
  module:{
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ]
}