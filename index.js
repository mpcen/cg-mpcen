const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Node.js Sample!\n');
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
