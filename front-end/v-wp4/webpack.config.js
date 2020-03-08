const path = require('path');
// const webpack = require('webpack');
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
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              cssModules: {
                // localIdentName: '[path][name]---[local]',
                localIdentName: '[name]',
                camelCase: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { modules: false } },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
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
