const path = require('path');
const webpack = require('webpack');

const reactPath = path.join(__dirname, 'app/react');
const outputPath = path.join(__dirname, 'app/assets/javascripts');

const indexFile = path.join(reactPath, 'index.jsx');

module.exports = {
  devtool: 'eval-source-map',
  entry: [indexFile],
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
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    moduleDirectories: ['node_modules', reactPath],
  },
}
