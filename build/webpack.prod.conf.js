var webpack = require('webpack'),
  config = require('./webpack.base.conf'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  SOURCE_MAP = false;

config.output.filename = '[name].[chunkhash:6].js';
config.output.chunkFilename = '[id].[chunkhash:6].js';

config.devtool = SOURCE_MAP ? 'cheap-module-source-map' : false;

config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', 'css')
}, {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style', 'css!less')
}, {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css!sass')
});

config.plugins.push(
  new CleanWebpackPlugin('dist', {
    root: config.commonPath.rootPath,
    verbose: false
  }),
  new CopyWebpackPlugin([
    {
      context: config.commonPath.staticDir,
      from: '**/*',
      ignore: ['*.md','*.mdown']
    }
  ]),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'mainifest']
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 30000
  }),
  new ExtractTextPlugin('[name].[contenthash:6].css', {
    allChunks : true // 若要按需加载 CSS 则请注释掉该行
  }),
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: config.commonPath.indexHTML,
    chunksSortMode: 'none'
  })
);

module.exports = config;
