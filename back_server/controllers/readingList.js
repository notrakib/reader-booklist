const { Op } = require("sequelize");
const Book = require("../models/book");
const ReadingList = require("../models/readingList");

exports.addBookToList = (req, res, next) => {
  const userUserId = req.user.userId;
  const bookBookId = req.body.bookId;

  ReadingList.create({
    readingStatus: "Reading",
    favourite: false,
    userUserId,
    bookBookId,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};

exports.fetchBookList = (req, res, next) => {
  const userUserId = req.user.userId;
  const offset = +req.body.offset * 3 || 0;

  ReadingList.findAndCountAll({
    where: { userUserId },
    limit: 3,
    offset,
    include: [{ model: Book }],
  })
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => next(err));
};

exports.filteredBookList = (req, res, next) => {
  const userUserId = req.user.userId;
  const filter = req.params.filter;
  const readingfilter = filter == 0 || filter == 1 ? null : filter;
  const favouriteFilter = filter == 0 || filter == 1 ? filter : null;

  ReadingList.findAll({
    where: {
      userUserId: userUserId,
      [Op.or]: [
        { readingStatus: readingfilter },
        { favourite: favouriteFilter },
      ],
    },
    include: [{ model: Book }],
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};

exports.toggleFavourite = (req, res, next) => {
  const readingListId = req.params.readingListId;

  ReadingList.findOne({ where: { readingListId } })
    .then((result) => {
      result.favourite = !result.favourite;
      return result.save();
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};

exports.changeStatus = (req, res, next) => {
  const readingListId = req.params.readingListId;
  const readingStatus = req.body.readingStatus;

  ReadingList.findOne({ where: { readingListId } })
    .then((result) => {
      result.readingStatus = readingStatus;
      result.favourite = result.favourite;
      return result.save();
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
};
