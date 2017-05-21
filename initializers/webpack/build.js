require('babel-core/register');

const fs = require('fs.extra');
const fse = require('fs-extra');
const  webpack = require('webpack');
const config = require('./production.js').default;

fse.emptyDir(`${process.cwd()}/src/static/assets`, (err) => {
  if (err) return console.log(err); // eslint-disable-line
});

webpack(config, function(_error, stats) {
  const manifest = stats.toJson().assetsByChunkName;
  fs.writeFile('webpack-manifest.json', JSON.stringify(manifest));
});
