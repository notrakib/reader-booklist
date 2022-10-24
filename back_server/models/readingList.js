const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const ReadingList = sequelize.define("readingList", {
  readingListId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  readingStatus: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  favourite: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = ReadingList;
