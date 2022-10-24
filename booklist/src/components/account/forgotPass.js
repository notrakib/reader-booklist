import { useContext, useRef } from "react";
import SignContext from "../store/signContext";
import Logo from "../layout/logo";
import classes from "./style/signin.module.css";
import { ForgotPassHandaler } from "../../api/sign";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const email = useRef();

  const PasswordHandaler = () => {
    ForgotPassHandaler({
      email: email.current.value,
    })
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          navigate(`/reset-password/${res.link}`);
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <Logo />
      </div>

      <h5>Enter Email</h5>

      <p className={classes.label}>Email</p>
      <input ref={email}></input>

      <button onClick={PasswordHandaler}>Sign up</button>
    </div>
  );
};

export default ForgotPassword;
