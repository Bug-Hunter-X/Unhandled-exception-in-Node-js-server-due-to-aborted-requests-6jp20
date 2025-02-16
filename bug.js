const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request takes too long to process
  // and the request is aborted.
  // In such cases, res.end() may fail to execute because the socket is already closed
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Simulate a long-running request
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});