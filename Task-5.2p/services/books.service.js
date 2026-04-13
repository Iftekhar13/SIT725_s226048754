const books = [
  {
    id: "b1",
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    year: 2008,
    genre: "Science Fiction",
    summary: "First novel of the Remembrance of Earth's Past trilogy."
  },
  {
    id: "b2",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Classic",
    summary: "An orphaned governess faces love and morality at Thornfield Hall."
  },
  {
    id: "b3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic",
    summary: "Elizabeth Bennet and Mr. Darcy navigate pride and society."
  },
  {
    id: "b4",
    title: "The English Patient",
    author: "Michael Ondaatje",
    year: 1992,
    genre: "Historical Fiction",
    summary: "Four strangers in a ruined villa during WWII confront memory and loss."
  },
  {
    id: "b5",
    title: "Small Gods",
    author: "Terry Pratchett",
    year: 1992,
    genre: "Fantasy",
    summary: "A god returns as a tortoise and questions belief and power."
  }
];

// get all books
const getAllBooks = () => {
  return books;
};

// get single book
const getBookById = (id) => {
  return books.find(book => book.id === id);
};

module.exports = {
  getAllBooks,
  getBookById
};