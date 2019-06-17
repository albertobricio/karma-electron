var electronPrebuilt = require('electron');
var spawn = require('child_process').spawn;

var child = spawn(electronPrebuilt, ['child.js'], {
  detached: true
});
child.stdin.write('Hi');
child.stdin.end();
