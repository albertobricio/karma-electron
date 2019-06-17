var spawn = require('child_process').spawn;

var child = spawn('node', ['child.js'], {stdio: ['pipe', 'inherit', 'inherit']});
child.stdin.write('Hi');
child.stdin.end();
