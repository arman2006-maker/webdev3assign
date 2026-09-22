// server.js
// A basic HTTP server built using Node.js's core "http" module
// Run with: node server.js
// Then visit: http://localhost:3000/, /about, /contact

const http = require("http");
const logger = require("./modules/logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  logger.log(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Welcome to Node Server");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("About Page");
      break;

    case "/contact":
      res.statusCode = 200;
      res.end("Contact Page");
      break;

    default:
      res.statusCode = 404;
      res.end("404 Error: Page Not Found");
      break;
  }
});

server.listen(PORT, () => {
  logger.success(`Server is running at http://localhost:${PORT}/`);
});
