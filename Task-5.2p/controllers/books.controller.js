const booksService = require('../services/books.service');
// Sample data (pretend it's from a database)

  
  // Controller logic
  exports.getAllBooks = (req, res) => {
    const books = booksService.getAllBooks();

    res.json({
      status: 200,
      data: books,
      message: 'Books retrieved successfully'
    });
  };

  exports.getBookById = (req, res) => {
    const book = booksService.getBookById(req.params.id);

    if (!book) {
      return res.status(404).json({
        status: 404,
        message: 'Book not found'
      });
    }

    res.json({
      status: 200,
      data: book,
      message: 'Book retrieved successfully'
    });
  };