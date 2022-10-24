const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  logoutTime: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  expiaryDate: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  token: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = User;
