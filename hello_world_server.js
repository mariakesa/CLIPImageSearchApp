const http = require('http');

const hostname = '127.0.0.1'; // Set the hostname
const port = 3000; // Set the port number

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the response header
  res.end('Hello World'); // Send the response message
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
