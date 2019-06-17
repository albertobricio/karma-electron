var electronPrebuilt = require('electron');
var spawn = require('child_process').spawn;

var child = spawn(electronPrebuilt, ['child.js'], {stdio: ['pipe', 'inherit', 'inherit']});
child.stdin.write('Hi');
child.stdin.end();
