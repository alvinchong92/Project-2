const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src', 'static'),
    inline: true,
    port: 8080,
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
    resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
