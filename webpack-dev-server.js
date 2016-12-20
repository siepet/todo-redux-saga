const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

const webpackDevServer = new WebpackDevServer(webpack(config), {
  quiet: false,
});

webpackDevServer.listen(8080, 'localhost', err => {
  if (err) { return console.error(err); }
  console.log('Listening at localhost:8080');
});
