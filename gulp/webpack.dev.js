const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common')

module.exports = Merge(CommonConfig, {
  // context: path.resolve(__dirname, './src'),
  // entry: {
  //   app: './index.js',
  // },
  // output: {
  //   filename: '[name].bundle.js',
  //   path: path.resolve(__dirname, './dist'),
  //   sourceMapFilename: '[name].map'
  // },
  // plugins: [
  //
  // ],
})
