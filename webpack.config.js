const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    app: './assets/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, './assets/dist'),
    filename: 'bundle.js',
  },
  watch: true,
  devServer: {
    contentBase: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "node_modules/jquery"),
          path.resolve(__dirname, "assets/js")
        ],
        use: [{
          loader: 'babel-loader'
        }],
      },
      {
      test: /\.jsx$/,
      include: [
        path.resolve(__dirname, "assets")
      ],
      use: [{
        loader: 'babel-loader'
      }],
      },
      { test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
        'url-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery'
    })
  ]
}

