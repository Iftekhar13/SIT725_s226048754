const Book = require('../models/book.model');

// CREATE BOOK
const createBook = async (data) => {
  return await Book.create(data);
};


// get all books
const getAllBooks = async () => {
  return await Book.find();
};



// get single book
const getBookById = async (id) => {
  return await Book.findOne({ id: id });
};

const updateBook = async (id, data) => {
  return await Book.findOneAndUpdate(
    { id: id },
    data,
    { new: true, runValidators: true }
  );
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook
};