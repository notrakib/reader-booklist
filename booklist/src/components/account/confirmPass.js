import { useContext, useRef } from "react";
import SignContext from "../store/signContext";
import Logo from "../layout/logo";
import classes from "./style/signin.module.css";
import { ConfirmPassHandaler } from "../../api/sign";
import { useNavigate, useParams } from "react-router-dom";

const ConfirmPassword = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const params = useParams();
  const pswd = useRef();
  const pswdConfirm = useRef();

  const PasswordHandaler = () => {
    if (pswd.current.value !== pswdConfirm.current.value) {
      context.setResultMessage({
        error: true,
        message: "Password did not match",
      });
      return;
    }

    ConfirmPassHandaler(
      {
        password: pswd.current.value,
      },
      params.link
    )
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          navigate("/");
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <Logo />
      </div>

      <h5>Enter New Password</h5>

      <p className={classes.label}>Password</p>
      <input ref={pswd}></input>
      <p className={classes.label}>Confirm Password</p>
      <input type="password" ref={pswdConfirm}></input>

      <button onClick={PasswordHandaler}>Confirm</button>
    </div>
  );
};

export default ConfirmPassword;
