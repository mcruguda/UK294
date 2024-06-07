const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve the frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hallo Welt' });
});

app.get('/api/welcome', (req, res) => {
  res.json({message: 'Welcome Cyrill Augustiny'});
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
