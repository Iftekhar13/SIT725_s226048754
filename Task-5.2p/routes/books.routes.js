const express = require('express');
const router = express.Router();

// Import the controller
const booksController = require('../controllers/books.controller');

// Route → Controller function
router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);

module.exports = router;

