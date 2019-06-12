const path = require('path');
const webpack = require('webpack')
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  entry: {
      index: './src/index.js',
      index2: './src/index2.js',
      tags: './src/tags.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'riot-tag-loader',
            options: {
              template: 'pug',
              debug: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain  -loader'
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.tag']
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    publicPath: '/assets/js/'
  }
};
