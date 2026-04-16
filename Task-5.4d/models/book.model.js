const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

  id: {
    type: String,
    required: true,
    unique: true,
    immutable: true
  },

  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },

  author: {
    type: String,
    required: true,
    minlength: 3
  },

  year: {
    type: Number,
    required: true,
    min: 1800,
    max: 2026
  },

  genre: {
    type: String,
    required: true
  },

  summary: {
    type: String,
    required: true,
    minlength: 10
  },

  price: {
    type: Number,
    required: true,
    min: 0
  }

});

module.exports = mongoose.model('Book', bookSchema);