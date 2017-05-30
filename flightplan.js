const plan = require('flightplan');

const tempDir = `blog-client${new Date().getTime()}`;
const user = 'nazip';

plan.target('production', {
  host: '192.168.1.80',
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('copy files to remote host');
  const filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(filesToCopy, `/tmp/${tempDir}`);
});

plan.remote(function(remote) {
  // remote.exec('nvm use default');
  remote.log('Move folder to web root');
  remote.exec(`cp -R /tmp/${tempDir} ~`);
  remote.rm(`-rf /tmp/${tempDir}`);

  remote.log('install dependencies');
  remote.exec(`npm --prefix ~/${tempDir} install ~/${tempDir}`);

  // remote.log('Buid');
  // remote.exec(`cd ~/${tempDir}/semantic && gulp build`);
  // remote.exec(`npm --prefix ~/${tempDir} run build`);

  remote.log('Reload application');
  remote.exec(`ln -snf ~/${tempDir} ~/current`);

  remote.log('install semantic');
  remote.exec('(cd ~/current && npm install semantic-ui-react --save)');

  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('Finish');
});
