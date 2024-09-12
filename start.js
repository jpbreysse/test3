const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello testWorld');
});

server.listen(port, hostname, () => {
  console.log(`Server running test at http://${hostname}:${port}/`);
});

