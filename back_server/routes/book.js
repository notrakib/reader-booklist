const express = require("express");
const route = express.Router();
const bookController = require("../controllers/book");
const isAuth = require("../middleware/auth");

route.post("/add-book", isAuth, bookController.addBook);
route.get("/get-book", isAuth, bookController.userBooks);
route.get("/get-all-book", bookController.allBooks);

route.post("/update-book", bookController.updateBook);
route.delete("/delete-book/:bookId", bookController.deleteBook);

module.exports = route;
