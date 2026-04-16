const express = require('express');
const router = express.Router();

// Import the controller
const booksController = require('../controllers/books.controller');

// Route → Controller function
router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.post('/', booksController.createBook);
router.put('/:id', booksController.updateBook);

module.exports = router;

