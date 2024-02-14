const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route for /signup-mock-service/users
app.post('/signup-mock-service/users', (req, res) => {
  // Extracting data from the request body
  const { firstName, lastName, email, password } = req.body;

  // Example: printing the received data
  console.log('Received signup request:');
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Email:', email);
  console.log('Password:', password);

  // Here you would typically perform signup logic, such as saving the user to a database

  // Sending back a response with headers and specified JSON format
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Accept', 'application/json');
  res.status(200).json({ status: 'ok' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

