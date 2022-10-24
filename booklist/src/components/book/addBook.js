import { useContext, useRef } from "react";
import Modal from "../layout/modal";
import { AddNewBook } from "../../api/book";
import classes from "./style/addBook.module.css";
import SignContext from "../store/signContext";

const AddBook = (props) => {
  const context = useContext(SignContext);
  const ititle = useRef();
  const iauthor = useRef();
  const ipublished_year = useRef();

  const AddHandaler = () => {
    const title = ititle.current.value;
    const author = iauthor.current.value;
    const published_year = ipublished_year.current.value;
    const book_summary = "";

    if (title === "" || author === "" || published_year === "") {
      context.setResultMessage({
        error: true,
        message: "Please fill up the fields",
      });
      return;
    }

    const book = { title, author, published_year, book_summary };

    AddNewBook(book)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          props.onModal();
          context.setResultMessage({
            error: false,
            message: "Added successfully",
          });
        }
      })
      .catch();
  };

  return (
    <Modal onModal={props.onModal}>
      <div className={classes.main}>
        <h1>Add a book</h1>

        <p className={classes.label}>Book Name</p>
        <input ref={ititle}></input>
        <p className={classes.label}>Year</p>
        <input ref={ipublished_year}></input>

        <p className={classes.label}>Author</p>
        <input ref={iauthor}></input>

        <button onClick={AddHandaler}>Add Book</button>
      </div>
    </Modal>
  );
};

export default AddBook;
