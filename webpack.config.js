// Webpack - Configuration
// Module Imports
const path = require('path');

// Module Exports
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      // JS
      test: /\.js$/,
      include: path.resolve(__dirname, './'),
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
