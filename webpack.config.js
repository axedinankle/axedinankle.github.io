var Clean = require('clean-webpack-plugin'),
    webpack = require('webpack');

var jsSource = '/source/assets/javascripts';
var jsOutput = '.tmp/assets/javascripts';

// split output JS into 'critical' (above-the-fold) scripts and the rest (which can be loaded on-demand)
module.exports = {
  entry: {
    critical: ['picturefill'],
    main: '.' + jsSource + '/main.js'
  },
  resolve: {
    modules: ['node_modules', __dirname + jsSource]
  },
  output: {
    path: __dirname + '/' + jsOutput,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new Clean([jsOutput])
  ]
};
