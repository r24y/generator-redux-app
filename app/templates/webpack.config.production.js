var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

var newConfig = Object.assign(config, {
  devtool: 'source-map',
  entry: './src/index',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': false,
      'process.env': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
});
newConfig.module.loaders = newConfig.module.loaders.map(function (loader) {
  var newLoader = {};
  Object.keys(loader).forEach(function(k) {
    var v = loader[k];
    if (k === 'loaders' && v instanceof Array) {
      return newLoader[k] = loader[k].filter(function (v) {
        return v !== 'react-hot';
      });
    }
    newLoader[k] = loader[k];
  });
  return newLoader;
});

module.exports = newConfig;
