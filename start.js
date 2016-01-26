console.log('starting the application ......');
var spawn = require('child_process').spawn;

var startDb = spawn('mongod',['--config','mongod.conf'], {
    detached:false,
    env: process.env,
    stdio: 'inherit'
});

var startApp = spawn('node', ['.'],{
    detached:false,
    env: process.env,
    stdio: 'inherit'
});