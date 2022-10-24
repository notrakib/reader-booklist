const express = require("express");
const route = express.Router();
const readingListController = require("../controllers/readingList");
const isAuth = require("../middleware/auth");

route.post("/add-to-list", isAuth, readingListController.addBookToList);
route.post("/get-all-books", isAuth, readingListController.fetchBookList);
route.get("/get-book/:filter", isAuth, readingListController.filteredBookList);
route.get(
  "/toggle-favourite/:readingListId",
  isAuth,
  readingListController.toggleFavourite
);
route.post(
  "/change-status/:readingListId",
  isAuth,
  readingListController.changeStatus
);

module.exports = route;
