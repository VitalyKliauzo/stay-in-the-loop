const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
        utilities: path.resolve(__dirname, 'src/utilities/'),
    },
    modules: ['node_modules'],
  },
};