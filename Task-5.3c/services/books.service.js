const Book = require('../models/book.model');


// get all books
const getAllBooks = async () => {
  return await Book.find();
};



// get single book
const getBookById = async (id) => {
  return await Book.findOne({ id: id });
};

module.exports = {
  getAllBooks,
  getBookById
};