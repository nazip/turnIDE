/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: [/\.scss$/, /\.css$/],
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loaders: ['url-loader?limit=100000']
      }
    ]
  },

  resolve: {
    root: root
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
