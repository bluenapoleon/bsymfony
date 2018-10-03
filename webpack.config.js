const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
        {
            test: /\.tag$/,
            exclude: /node_modules/,
            loader: 'riot-tag-loader'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
    ]
  },
  resolve: {
      extensions: ['.js', '.tag']
  },
  plugins: [
    new webpack.ProvidePlugin({
        riot: 'riot'
    })
  ]
};