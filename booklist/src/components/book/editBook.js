import { useContext, useRef } from "react";
import Modal from "../layout/modal";
import { UpdateBook } from "../../api/book";
import classes from "./style/addBook.module.css";
import { useNavigate } from "react-router-dom";
import SignContext from "../store/signContext";

const EditBook = (props) => {
  const context = useContext(SignContext);
  const ititle = useRef();
  const iauthor = useRef();
  const ipublished_year = useRef();
  const navigate = useNavigate();

  const EditHandaler = () => {
    const title = ititle.current.value;
    const author = iauthor.current.value;
    const published_year = ipublished_year.current.value;

    if (title === "" && author === "" && published_year === "") {
      context.setResultMessage({
        error: true,
        message: "At least one field requires",
      });
      return;
    }

    const book = {
      bookId: props.book.bookId,
      title: title.current.value || null,
      author: author.current.value || null,
      published_year: published_year.current.value || null,
    };

    UpdateBook(book)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          props.onModal();
          navigate("/book-list");
          context.setResultMessage({
            error: false,
            message: "Edited successfully",
          });
        }
      })
      .catch();
  };

  return (
    <Modal onModal={props.onModal}>
      <div className={classes.main}>
        <h1>Edit book</h1>

        <p className={classes.label}>Book Name</p>
        <input ref={ititle}></input>
        <p className={classes.label}>Year</p>
        <input ref={ipublished_year}></input>

        <p className={classes.label}>Author</p>
        <input ref={iauthor}></input>

        <button onClick={EditHandaler}>Update</button>
      </div>
    </Modal>
  );
};

export default EditBook;
