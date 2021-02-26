const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src/client'),
  entry: {
    app: './index.jsx',
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3001/',
        secure: 'false',
      },
    },
  },
};
