const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const reactPath = path.join(__dirname, 'app/react');
const outputPath = path.join(__dirname, 'app/assets/javascripts');

const indexFile = path.join(reactPath, 'index.jsx');
const styleFile = path.join(__dirname, 'app/assets/stylesheets/application.scss');

module.exports = {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill', indexFile, styleFile],
  output: {
    path: outputPath,
    filename: 'react_bundle.js',
    publicPath: 'http://localhost:8080/static',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: reactPath,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    moduleDirectories: ['node_modules', reactPath],
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
}
