var webpack = require('webpack'),
  config = require('./webpack.base.conf'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
  SOURCE_MAP = false;

config.output.filename = '[name].js';
config.output.chunkFilename = '[id].js';

config.devtool = SOURCE_MAP ? 'cheap-module-eval-source-map' : false;

config.entry.app = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?reload=true',
  'webpack/hot/only-dev-server',
  config.entry.app
];

config.output.publicPath = '/';

config.module.loaders.push({
  test: /\.css$/,
  loader: 'style!css'
}, {
  test: /\.less$/,
  loader: 'style!css!less'
}, {
  test: /\.scss$/,
  loader: 'style!css!sass'
});

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('[name].css'),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: config.commonPath.indexHTML,
    /*inject: 'body',
    chunks: ['vendor', 'app']*/
  }),
  new BrowserSyncPlugin({
    host: '127.0.0.1',
    port: 9090,
    proxy: 'http://127.0.0.1:9000/',
    logConnections: false,
    notify: false
  }, {
    reload: false
  })
);

module.exports = config;
