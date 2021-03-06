const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC = path.resolve(__dirname, 'src');
const ASSETS = path.resolve(SRC, 'assets');
const DIST = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: path.join(SRC, 'app.js'),
  },
  output: {
    path: DIST,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(ASSETS, 'index.html'),
        to: DIST,
      },
    ]),
  ],
  devServer: {
    port: 3000,
    contentBase: [ASSETS],
  },
};
