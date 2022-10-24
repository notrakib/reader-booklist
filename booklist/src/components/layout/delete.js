import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteBook } from "../../api/book";
import SignContext from "../store/signContext";
import Modal from "./modal";
import classes from "./style/delete.module.css";

const Delete = (props) => {
  const context = useContext(SignContext);
  const navigate = useNavigate();

  const DeleteHandaler = () => {
    DeleteBook(props.bookId)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          props.onModal();
          navigate("/book-list");
          context.setResultMessage({
            error: false,
            message: "Deleted successfully",
          });
        }
      })
      .catch();
  };

  return (
    <Modal onModal={props.onModal}>
      <div className={classes.main}>
        <h3>Are you sure you want to delete the book</h3>
        <h2>Are you sure you want to delete the book</h2>
        <button onClick={DeleteHandaler}>Delete</button>
      </div>
    </Modal>
  );
};

export default Delete;
