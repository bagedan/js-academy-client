const path = require('path');
const webpack = require('webpack');
const RewriteImportPlugin = require("less-plugin-rewrite-import");
const ROOT_DIR = path.resolve(__dirname);
const SRC_DIR = path.resolve(__dirname, 'app');
const BUILD_DIR = path.resolve(__dirname, 'build');
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

var webpackConfig = {
  devtool: 'none',
  entry: './src/main.js',
  output: {
    path: path.resolve('static/dist'),
    filename: 'app-bundle.js'
  },
  resolve: {
    modules: [ROOT_DIR, 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(less|config)/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [ROOT_DIR, NODE_MODULES_DIR],
              plugins: [
                new RewriteImportPlugin({
                  paths: {
                    '../../theme.config':  __dirname + '/my-theme/theme.config',
                  },
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
        use: [
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader:'babel-loader',
        options: {presets: ['env']}
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        },
        exclude: /node_modules/
      }
    ]
  },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     inject: 'body',
  //     template: 'app/index.html',
  //     filename: 'index.html',
  //     chunks: ['index'],
  //     chunksSortMode: 'dependency',
  //     env: process.env,
  //   }),
  // ],
};

module.exports = webpackConfig;