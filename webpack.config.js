const path = require('path');

module.exports = {
  entry: './src/new-index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};