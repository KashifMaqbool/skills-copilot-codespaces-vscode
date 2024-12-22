// Create web server
// 1. Require express
// 2. Create an express app
// 3. Create a route that responds to a GET request
// 4. Respond with a JSON object
// 5. Indicate that the server is listening on port 3000

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});