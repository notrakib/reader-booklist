import classes from "./style/slide.module.css";
import styles from "./style/slide-err.module.css";
import React, { useContext } from "react";
import SignContext from "../store/signContext";

const Slide = () => {
  const context = useContext(SignContext);
  const error = context.result.error;
  const message = context.result.message;

  return (
    <div className={error ? styles.slide : classes.slide}>
      <div>
        {error && <h2>Attention!</h2>}
        {!error && <h2>Successful</h2>}
        <button onClick={() => context.refreshResultMessage()}>X</button>
      </div>

      <p>{message}</p>
    </div>
  );
};

export default React.memo(Slide);
