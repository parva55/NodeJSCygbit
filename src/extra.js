const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome to server \nThis is a simple Node.js HTTP server.\n ");
});

server.listen(3001);
