const User = require("./models/user");
const Book = require("./models/book");
const ReadingList = require("./models/readingList");

const userRoute = require("./routes/user");
const bookRoute = require("./routes/book");
const readingListRoute = require("./routes/readingList");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const sequelize = require("./util/database");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const app = express();

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage }).single("file"));
app.use(express.static(path.join(__dirname, "files")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(userRoute);
app.use(bookRoute);
app.use(readingListRoute);

User.hasMany(ReadingList);
ReadingList.belongsTo(User);

Book.hasOne(ReadingList, { onDelete: "cascade" });
ReadingList.belongsTo(Book);

User.hasMany(Book, { onDelete: "cascade" });
Book.belongsTo(User);

app.use((error, req, res, next) => {
  res.json({ error: { message: error.message } });
});

sequelize
  .sync()
  .then(() => {
    app.listen(8080);
  })
  .catch();
