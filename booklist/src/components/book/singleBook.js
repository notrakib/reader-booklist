import dlt from "./style/delete.png";
import edit from "./style/edit.png";
import classes from "./style/singleBook.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import EditBook from "./editBook";
import Delete from "../layout/delete";
import { UpdateBook } from "../../api/book";
import SignContext from "../store/signContext";

const SingleBook = (props) => {
  const context = useContext(SignContext);
  const [editModal, setModal] = useState(false);
  const [dltModal, setDltModal] = useState(false);
  const params = useLocation();
  const summary = useRef();
  const navigate = useNavigate();

  const EditHandaler = () => {
    if (summary.current.value === "") {
      context.setResultMessage({
        error: true,
        message: "Please fill up the summary",
      });
      return;
    }

    const book = {
      bookId: params.state.bookId,
      book_summary: summary.current.value || null,
    };

    UpdateBook(book)
      .then((book) => {
        navigate("/book-list");
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <div className={classes.row1}>
        <div className={classes.row1l}>
          <h1>{params.state.title}</h1>
        </div>
        <div className={classes.row1r}>
          <button onClick={() => setModal(!editModal)}>
            <img alt="" src={edit} />
          </button>
          <button onClick={() => setDltModal(!dltModal)}>
            <img alt="" src={dlt} />
          </button>
        </div>
      </div>

      <div className={classes.row2}>
        <p className={classes.author}>Author: {params.state.author} </p>
        <p className={classes.date}>
          Published Date: {params.state.published_year}
        </p>
      </div>

      <p className={classes.editP}>Book Summary</p>
      <textarea
        ref={summary}
        placeholder={params.state.book_summary}
      ></textarea>
      <button onClick={EditHandaler} className={classes.editBtn}>
        Save Summary
      </button>
      {editModal && (
        <EditBook book={params.state} onModal={() => setModal(!editModal)} />
      )}
      {dltModal && (
        <Delete
          bookId={params.state.bookId}
          onModal={() => setDltModal(!dltModal)}
        />
      )}
    </div>
  );
};

export default SingleBook;
