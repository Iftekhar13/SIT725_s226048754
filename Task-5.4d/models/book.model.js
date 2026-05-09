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
    max: new Date().getFullYear(),
    validate: {
      validator: Number.isInteger,
      message: "Year must be an integer"
    }
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
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    validate: {
      validator: function (v) {
        return parseFloat(v.toString()) > 0;
      },
      message: "Price must be greater than 0"
    }
  }

});

module.exports = mongoose.model('Book', bookSchema);