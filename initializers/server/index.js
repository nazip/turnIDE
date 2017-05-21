const path = require('path');

require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('./globals');
require('babel-core/register');
require.extensions['.css'] = () => {   // eslint-disable-line
  return;
};

const port = 3001;

const express = require('express');
const application = express();

application.use(express.static('src/static'));
application.use(express.static('src/static/img'));
application.use(express.static('node_modules/semantic-ui/examples'));

application.set('views', __dirname);
application.set('view engine', 'ejs');

if (__DEVELOPMENT__) { // eslint-disable-line
  const webpack = require('webpack');
  const config = require('../../webpack.config.js').default;
  const compiler = webpack(config);

  const webpackDev = require('webpack-dev-middleware');
  const webpackHot = require('webpack-hot-middleware');

  application.use(
    webpackDev(
      compiler,
      {
        hot: true,
        publicPath: config.output.publicPath,
        stats: { color: true }
      }
    )
  );
  application.use(webpackHot(compiler));
}

application.get('*', require('./render').default);
application.listen(port,
  function() {console.log(`Server started (port ${port})`);}); // eslint-disable-line
