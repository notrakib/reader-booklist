import link from "./style/link.png";
import filled from "./style/filled.png";
import unfilled from "./style/unfilled.png";
import classes from "./style/readinglistBook.module.css";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChangeStatus, ToggleFavourite } from "../../api/readingList";
import SignContext from "../store/signContext";

const ReadingListBook = (props) => {
  const context = useContext(SignContext);
  const [toggle, setToggle] = useState(props.book.favourite);
  const status = useRef();
  const navigate = useNavigate();

  const ReadingStatusHandaler = () => {
    ChangeStatus(
      { readingStatus: status.current.value },
      props.book.readingListId
    )
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          context.setResultMessage({
            error: false,
            message: "Reading status updated",
          });
          return;
        }
      })
      .catch();
  };

  const ToggleHandaler = (confirmer) => {
    ToggleFavourite(props.book.readingListId)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          context.setResultMessage({
            error: false,
            message: "Favourite status updated",
          });
          setToggle(!toggle);
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <div className={classes.row1}>
        <div className={classes.row1l}>
          <h1>
            {props.book.book.title}
            <img
              onClick={() =>
                navigate("/book-details", { state: props.book.book })
              }
              src={link}
              alt=""
            ></img>
          </h1>
        </div>
        <div className={classes.row1r}>
          {!toggle && (
            <button onClick={ToggleHandaler}>
              <img alt="" src={filled} />
            </button>
          )}
          {toggle && (
            <button onClick={ToggleHandaler}>
              <img alt="" src={unfilled} />
            </button>
          )}
          <select
            ref={status}
            defaultValue={props.book.readingStatus}
            onChange={ReadingStatusHandaler}
            className={classes.select}
          >
            <option value="New">New</option>
            <option value="Reading">Reading</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      <div className={classes.row2}>
        <p className={classes.author}>Author: {props.book.book.author}</p>
        <p className={classes.date}>
          Published Date: {props.book.book.published_year}
        </p>
      </div>
    </div>
  );
};

export default ReadingListBook;
