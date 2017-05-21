/* eslint-disable */
import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const root = path.join(process.cwd(), 'src');

export default  {
  devtool: 'source-map',

  entry: {
    // bundle: './src/index.js'
    // bundle: './dist/bundle.js'
    bundle: '../server/index.js'
    // bundle: path.join(process.cwd(), 'dist', '/assets/', 'bundle.js')
  },

  output: {
    path: path.join(process.cwd(), 'src', 'static', 'assets'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: [/\.scss$/, /\.css$/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng: \
          {optimizationLevel=7}&gifsicle: {interlaced=false}'
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
      path.join(process.cwd(), 'src'),
      'node_modules'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__:  true,
      __DEVELOPMENT__: false,
      'process.env.NODE_ENV': 'production'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'source-map'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]

};
