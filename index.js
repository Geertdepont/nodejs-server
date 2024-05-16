// Importing required modules
const http = require('http');

// Define port number
const port = 3000;

// Define JSON response
const jsonResponse = {
  message: "Hello, world!",
  data: {
    key: "value"
  }
};

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set response header to JSON
  res.setHeader('Content-Type', 'application/json');

  // Send the JSON response
  res.end(JSON.stringify(jsonResponse));
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});