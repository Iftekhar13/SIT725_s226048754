const mongoose = require('mongoose');

// IMPORTANT: Decimal128 is required by task
const bookSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  year: Number,
  genre: String,
  summary: String,
  price: {
    type: mongoose.Schema.Types.Decimal128
  }
});

module.exports = mongoose.model('Book', bookSchema);