const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const webpackConfig = {
  entry: {
    "button": "./src/components/button/index.js"
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    //alias: config.alias,
    modules: ['node_modules']
  },
  externals: [{
    vue: 'vue'
  }, nodeExternals()],
  module: {
    rules: [
      // {
      //   test: /\.(jsx?|babel|es6)$/,
      //   include: process.cwd(),
      //   //exclude: config.jsexclude,
      //   loader: 'babel-loader',
      //   plugins: ["transform-es2015-modules-commonjs"]
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
};

module.exports = webpackConfig;
