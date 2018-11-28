const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
var ProgressBarPlugin = require('progress-bar-webpack-plugin'); // 打包进度插件

const config = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `${Math.random()}___QQ:752781621`,
      filename: 'index.html'
    }),
    new ProgressBarPlugin()
  ]
};

module.exports = config;