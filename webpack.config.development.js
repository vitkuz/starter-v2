const path = require('path');

module.exports = {
  entry: './src/client/client.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'client.bundle.js'
  }
};
