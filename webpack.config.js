'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './background/index.js',
  output: {
    path: __dirname,
    filename: './background/public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
};