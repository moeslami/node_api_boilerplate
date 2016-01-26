console.log('starting the application ......');
var spawn = require('child_process').spawn;

var startDb = spawn('mongod',['--bind_ip=process.env.IP','--dbpath=server/data','--nojournal','--rest'], {
    detached:false,
    env: process.env,
    stdio: 'inherit'
});

var startApp = spawn('node', ['.'],{
    detached:false,
    env: process.env,
    stdio: 'inherit'
});