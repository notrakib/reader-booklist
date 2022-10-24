import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./style/modal.module.css";

const Underlay = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Underlay onClick={props.onModal}></Underlay>,
        document.getElementById("underlay_root")
      )}
      {ReactDOM.createPortal(
        <Overlay onDelete={props.onDelete} onClick={props.onClick}>
          {props.children}
        </Overlay>,
        document.getElementById("overlay_root")
      )}
    </Fragment>
  );
};

export default Modal;
