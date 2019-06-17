let input = '';

process.stdin.on('readable', () => {
  let chunk;
  while (chunk = process.stdin.read()) input += chunk;
});

process.stdin.on('end', () => {
  console.log(input);
});
