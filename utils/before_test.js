var path = require('path');

require('app-module-path').addPath(path.join(process.cwd(), 'src'));

switch (process.env.TARGET) {
  case 'staging':
    global.__DEVELOPMENT__ = false;
    global.__STAGING__ = true;
    break;
  case 'production':
    global.__PRODUCTION__ = true;
    global.__DEVELOPMENT__ = false;
    global.__STAGING__ = false;
    break;
  case 'development':
    global.__DEVELOPMENT__ = true;
    global.__PRODUCTION__ = false;
    global.__STAGING__ = false;
    break;
}
