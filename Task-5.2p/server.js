const express = require('express');
const app = express();
const PORT = 3000;

// Import route file
const booksRoutes = require('./routes/books.routes');

// Mount the route at /api/food
app.use('/api/books', booksRoutes);

app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Books Catalog Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
