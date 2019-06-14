const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  entry: {
      index: './src/index.js',
      login: './src/login.js',
      tags: './src/tags.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    publicPath: '/assets/js/'
  }
};
