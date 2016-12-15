var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },
  module : {
    loaders : [
      {
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};
module.exports = config;
