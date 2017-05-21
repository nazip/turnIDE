global.__SERVER__ = true; // eslint-disable-line
global.__CLIENT__ = false; // eslint-disable-line
global.__DEVELOPMENT__ = (process.env.NODE_ENV || '' ).toLowerCase() == 'development'; // eslint-disable-line
