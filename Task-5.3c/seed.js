const mongoose = require('mongoose');
const Book = require('./models/book.model');

// connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/booksdb')
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => console.log(err));


const books = [
  {
    id: "b1",
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    year: 2008,
    genre: "Science Fiction",
    summary: "First novel of the Remembrance of Earth's Past trilogy.",
    price: mongoose.Types.Decimal128.fromString("19.99")
  },
  {
    id: "b2",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Classic",
    summary: "Orphaned governess story at Thornfield Hall.",
    price: mongoose.Types.Decimal128.fromString("22.00")
  },
  {
    id: "b3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic",
    summary: "Love and social expectations.",
    price: mongoose.Types.Decimal128.fromString("22.00")
  },
  {
    id: "b4",
    title: "The English Patient",
    author: "Michael Ondaatje",
    year: 1992,
    genre: "Historical Fiction",
    summary: "WWII villa story of memory and loss.",
    price: mongoose.Types.Decimal128.fromString("25.39")
  },
  {
    id: "b5",
    title: "Small Gods",
    author: "Terry Pratchett",
    year: 1992,
    genre: "Fantasy",
    summary: "A god returns as a tortoise.",
    price: mongoose.Types.Decimal128.fromString("31.99")
  }
];


const seedDB = async () => {
  await Book.deleteMany({});
  await Book.insertMany(books);
  console.log("Database seeded successfully 🚀");
  mongoose.connection.close();
};

seedDB();
