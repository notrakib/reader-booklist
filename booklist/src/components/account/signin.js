import { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignInHandaler } from "../../api/sign";
import Logo from "../layout/logo";
import SignContext from "../store/signContext";
import classes from "./style/signin.module.css";

const SignIn = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const email = useRef();
  const pswd = useRef();

  const UserSignIn = () => {
    const user = {
      email: email.current.value,
      password: pswd.current.value,
    };

    SignInHandaler(user)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          context.setResultMessage({
            error: false,
            message: "Sign-in Successful",
          });
          context.sign_in(res.userInfo, res.token);
          navigate("/book-list");
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <Logo />
      </div>

      <h5>Sign in to your account</h5>

      <div className={classes.link}>
        <p>Don't have an account</p>
        <NavLink to="/sign-up">
          <p className={classes.rlink}>Sign up</p>
        </NavLink>
      </div>

      <p className={classes.label}>Email</p>
      <input ref={email}></input>
      <p className={classes.label}>Password</p>
      <input type="password" ref={pswd}></input>

      <div className={classes.frgt}>
        <NavLink to="/sign-up">
          <p className={classes.rlink}>Forgot password</p>
        </NavLink>
      </div>

      <p className={classes.info}>
        By signing in, you agree with our privacy and usage terms
      </p>
      <button onClick={UserSignIn}>Sign in</button>
    </div>
  );
};

export default SignIn;
