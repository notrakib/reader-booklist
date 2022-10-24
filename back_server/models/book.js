const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Book = sequelize.define("book", {
  bookId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  published_year: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  book_summary: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Book;
