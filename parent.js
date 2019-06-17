var spawn = require('child_process').spawn;

var child = spawn('electron', ['child.js'], {stdio: ['pipe', 'inherit', 'inherit']});
child.stdin.end('Hi');
