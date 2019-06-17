var spawn = require('child_process').spawn;

var child = spawn('electron', ['child.js']);
child.stdout.on('readable', () => {
  while (chunk = child.stdout.read()) console.log(chunk.toString('utf8'));
});
child.stdin.end('Hi');
