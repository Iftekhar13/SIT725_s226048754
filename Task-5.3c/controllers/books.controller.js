const booksService = require('../services/books.service');

// Get all books
exports.getAllBooks = async (req, res) => {
  const books = await booksService.getAllBooks();

  res.json({
    status: 200,
    data: books,
    message: 'Books retrieved successfully'
  });
};

// Get book by ID
exports.getBookById = async (req, res) => {
  const book = await booksService.getBookById(req.params.id);

  res.json({
    status: 200,
    data: book,
    message: 'Book retrieved successfully'
  });
};