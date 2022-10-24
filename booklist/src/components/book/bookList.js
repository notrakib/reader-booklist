import { useContext, useEffect, useState } from "react";
import classes from "./style/bookList.module.css";
import EachBook from "./eachBook";
import Delete from "../layout/delete";
import AddBook from "./addBook";
import { FetchBook } from "../../api/book";
import SignContext from "../store/signContext";

const BookList = () => {
  const context = useContext(SignContext);
  const [showmodal, setmodal] = useState(false);
  const [showAddmodal, setAddmodal] = useState(false);
  const [bookId, setbookId] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    FetchBook()
      .then((tasks) => setBooks(tasks))
      .catch();
  }, [showAddmodal, showmodal]);

  return (
    <div className={classes.main}>
      <div className={classes.add}>
        <h3>Hi {context.user.fname || "anon"} here's your book list</h3>
        <button onClick={() => setAddmodal(!showAddmodal)}>+ Add Book</button>
      </div>

      <div>
        {books.map((each) => {
          return (
            <EachBook
              onModal={(id) => {
                setmodal(!showmodal);
                setbookId(id);
              }}
              key={each.bookId}
              book={each}
            />
          );
        })}
      </div>
      {showmodal && (
        <Delete bookId={bookId} onModal={() => setmodal(!showmodal)} />
      )}
      {showAddmodal && <AddBook onModal={() => setAddmodal(!showAddmodal)} />}
    </div>
  );
};

export default BookList;
