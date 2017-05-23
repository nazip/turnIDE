/* eslint-disable */
import webpack from 'webpack';
import path from 'path';

const root = path.join(process.cwd(), 'src');

export default  {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './index.js'
  ],

  output: {
    // path: path.join(process.cwd(), 'dist'),
    path: path.join(process.cwd(), 'src', 'static', 'assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: [/\.css$/],
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng: {optimizationLevel=7}&gifsicle: {interlaced=false}"
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader?limit=100000'
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [
     path.join(process.cwd(), "src"),
     "node_modules"
    ]
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
