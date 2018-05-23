const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/js/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'stage-2']
      }
    },
    {
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'standard-loader',
      exclude: /(node_modules|bower_components)/,
      options: {
        parser: 'babel-eslint'
      }
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  }
}
