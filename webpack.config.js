const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: {
      index: './src/index.js',
      tags: './src/tags.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
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
    })
  ],
  devServer: {
    publicPath: '/assets/js/'
  }
};