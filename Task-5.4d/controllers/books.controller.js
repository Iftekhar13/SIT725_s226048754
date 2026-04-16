const booksService = require('../services/books.service');


// ==========================
// GET ALL BOOKS
// ==========================
exports.getAllBooks = async (req, res) => {
  try {
    const books = await booksService.getAllBooks();

    res.status(200).json({
      status: 200,
      data: books,
      message: 'Books retrieved successfully'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// ==========================
// GET BOOK BY ID
// ==========================
exports.getBookById = async (req, res) => {
  try {
    const book = await booksService.getBookById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json({
      status: 200,
      data: book,
      message: 'Book retrieved successfully'
    });

  } catch (error) {
    console.log(error);

    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    res.status(500).json({ message: 'Internal server error' });
  }
};


// ==========================
// CREATE BOOK (SAFE WRITE)
// ==========================
exports.createBook = async (req, res) => {
  try {

    const allowedKeys = ["id", "title", "author", "year", "genre", "summary", "price"];
    const requestKeys = Object.keys(req.body);

    const hasUnknown = requestKeys.some(key => !allowedKeys.includes(key));

    if (hasUnknown) {
      return res.status(400).json({
        message: "Unknown fields are not allowed"
      });
    }

    const newBook = await booksService.createBook(req.body);

    res.status(201).json({
      status: 201,
      data: newBook,
      message: 'Book created successfully'
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'Book already exists' });
    }

    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: 'Internal server error' });
  }
};


// ==========================
// UPDATE BOOK (SAFE WRITE)
// ==========================
exports.updateBook = async (req, res) => {
  try {

    const allowedKeys = ["title", "author", "year", "genre", "summary", "price"];
    const requestKeys = Object.keys(req.body);

    const hasUnknown = requestKeys.some(key => !allowedKeys.includes(key));

    if (hasUnknown || req.body.id) {
      return res.status(400).json({
        message: "Invalid or immutable fields detected"
      });
    }

    // ✅ FIX FOR T11 (PRICE TYPE VALIDATION)
    if (req.body.price !== undefined && isNaN(Number(req.body.price))) {
      return res.status(400).json({
        message: "Price must be a valid number"
      });
    }

    const updated = await booksService.updateBook(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.status(200).json({
      status: 200,
      data: updated,
      message: 'Book updated successfully'
    });

  } catch (error) {

    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: 'Internal server error' });
  }
};