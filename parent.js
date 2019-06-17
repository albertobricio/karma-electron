// Turned out we were fucked from the start =/
//   https://github.com/electron/electron/issues/4218
// Need to move to a temporary file
// Can pass it in as a parameter to load
var electronPrebuilt = require('electron');
var spawn = require('child_process').spawn;

var child = spawn(electronPrebuilt, ['child.js']);
child.stdin.write('Hi');
child.stdin.end();
