const Book = require("../models/book");

exports.addBook = (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  const published_year = req.body.published_year;
  const book_summary = req.body.book_summary;
  const userUserId = req.user.userId;

  Book.create({
    title,
    author,
    published_year,
    book_summary,
    userUserId,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};

exports.userBooks = (req, res, next) => {
  const userUserId = req.user.userId;

  Book.findAll({ where: { userUserId } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};

exports.allBooks = (req, res, next) => {
  Book.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};

exports.updateBook = (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  const published_year = req.body.published_year;
  const book_summary = req.body.book_summary;

  Book.findOne({
    where: { bookId: req.body.bookId },
  })
    .then((book) => {
      title != null ? (book.title = title) : (book.title = book.title);
      author != null ? (book.author = author) : (book.author = book.author);
      published_year != null
        ? (book.published_year = published_year)
        : (book.published_year = book.published_year);
      book_summary != null
        ? (book.book_summary = book_summary)
        : (book.book_summary = book.book_summary);

      return book.save();
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};

exports.deleteBook = (req, res, next) => {
  Book.destroy({
    where: { bookId: req.params.bookId },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};
