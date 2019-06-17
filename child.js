process.on('uncaughtException', function handleUncaughtException (err) {
  throw err;
});

var app = require('electron').app;

app.on('window-all-closed', function handleWindowsClosed () {
  app.quit();
});

var stdinContent = '';
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function handleReadable () {
  console.log('readable occurred');
  // Use a loop to make sure we read all available data.
  while (true) {
    var stdinChunk = process.stdin.read();
    console.log('chunk received', stdinChunk);
    if (stdinChunk === null) {
      break;
    }
    stdinContent += stdinChunk;
  }
});
process.stdin.on('end', function handleEnd () {
  console.log('parsing json', stdinContent);
  // var stdinOptions = JSON.parse(stdinContent);
  // Object.assign(program, stdinOptions);
  // launchBrowserWindow();
});

app.on('ready', function () {
  process.exit();
});
