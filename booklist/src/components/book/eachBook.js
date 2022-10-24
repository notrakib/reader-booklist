import link from "./style/link.png";
import dlt from "./style/delete.png";
import plus from "./style/plus.png";
import classes from "./style/eachBook.module.css";
import { useNavigate } from "react-router-dom";
import { AddToReadingList } from "../../api/readingList";
import SignContext from "../store/signContext";
import { useContext } from "react";

const EachBook = (props) => {
  const context = useContext(SignContext);
  const navigate = useNavigate();

  const AddReadingList = () => {
    AddToReadingList({ bookId: props.book.bookId })
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          navigate("/book-list");
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <div className={classes.row1}>
        <div className={classes.row1l}>
          <h1>
            {props.book.title}
            <img
              onClick={() => navigate("/book-details", { state: props.book })}
              src={link}
              alt=""
            ></img>
          </h1>
        </div>
        <div className={classes.row1r}>
          <button onClick={AddReadingList}>
            <img alt="" src={plus} />
          </button>
          <button onClick={() => props.onModal(props.book.bookId)}>
            <img alt="" src={dlt} />
          </button>
        </div>
      </div>

      <div className={classes.row2}>
        <p className={classes.author}>Author: {props.book.author}</p>
        <p className={classes.date}>
          Published Date: {props.book.published_year}
        </p>
      </div>
    </div>
  );
};

export default EachBook;
