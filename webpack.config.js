const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: path.resolve(__dirname, '/build/'),
    contentBase: path.resolve(__dirname, './public/'),
    open: true,
    port: 8080,
    proxy: {
      '/api/': 'http://localhost:3000',
    },
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        exclude: /node_modules/,
        use: ['file-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
