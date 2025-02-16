const http = require('http');

const server = http.createServer((req, res) => {
  let aborted = false;
  res.on('close', () => {
    aborted = true; 
  });
  setTimeout(() => {
    if (!aborted) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 5000); 
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});