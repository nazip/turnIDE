/* eslint-disable */

import path from 'path';
import webpack from 'webpack';

const root = path.join(process.cwd(), 'src');

export default  {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
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
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__:  true,
      __DEVELOPMENT__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
