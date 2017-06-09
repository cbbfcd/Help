var path = require('path'),
  webpack = require('webpack'),
  NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var rootPath = path.resolve(__dirname, '..'), // 项目根目录
  src = path.join(rootPath, 'src'), // 开发源码目录
  env = process.env.NODE_ENV.trim(); // 当前环境
var commonPath = {
  rootPath: rootPath,
  dist: path.join(rootPath, 'dist'), // build 后输出目录
  indexHTML: path.join(src, 'index.html'), // 入口基页
  staticDir: path.join(rootPath, 'static') // 无需处理的静态资源目录
};

module.exports = {
  commonPath: commonPath,
  entry: {
    app: path.join(src, 'app.js'),

    vendor: [
      'history',
      'lodash',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
    ]
  },
  output: {
    path: path.join(commonPath.dist, 'static'),
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.css', '.scss'],
    alias: {
      ASSET: path.join(src, 'assets'),
      COMPONENT: path.join(src, 'components'),
      ACTION: path.join(src, 'redux/actions'),
      REDUCER: path.join(src, 'redux/reducers'),
      STORE: path.join(src, 'redux/store'),
      ROUTE: path.join(src, 'routes'),
      UTIL: path.join(src, 'utils'),
      HOC: path.join(src, 'utils/HoC'),
      MIXIN: path.join(src, 'utils/mixins'),
      MOCK:path.join(src, 'mock')
    }
  },
  resolveLoader: {
    root: path.join(rootPath, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: (function() {
        var _loaders = ['babel?' + JSON.stringify({
          cacheDirectory: true,
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy',
            ['import', [{libraryName: 'antd', style: 'css'}]]
          ],
          presets: ['es2015', 'react', 'stage-0'],
          env: {
            production: {
              presets: ['react-optimize']
            }
          }
        })];

        if (env === 'development') {
          _loaders.unshift('react-hot');
        }
        return _loaders;
      })(),
      include: src,
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url',
      query: {
        limit: 10240, // 10KB 以下使用 base64
        name: 'img/[name]-[hash:6].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
    }]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  plugins: [
    new NyanProgressPlugin(), // 进度条
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      __DEV__: env === 'development',
      __PROD__: env === 'production',
      __COMPONENT_DEVTOOLS__: true, // 是否使用组件形式的 Redux DevTools
      __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
    })
  ]
};
