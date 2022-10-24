import { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignUpHandaler } from "../../api/sign";
import Logo from "../layout/logo";
import SignContext from "../store/signContext";
import classes from "./style/signup.module.css";

const SignUp = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const pswd = useRef();

  const UserSignUp = () => {
    const user = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
      password: pswd.current.value,
    };

    SignUpHandaler(user)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          navigate("/");
          context.setResultMessage({
            error: false,
            message: "Just signed up",
          });
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <Logo />
      </div>

      <h5>Create new account</h5>

      <div className={classes.link}>
        <p>Already have an account</p>
        <NavLink to="/">
          <p className={classes.rlink}>Sign in</p>
        </NavLink>
      </div>

      <p className={classes.label}>First Name</p>
      <input ref={fname}></input>
      <p className={classes.label}>Last Name</p>
      <input ref={lname}></input>
      <p className={classes.label}>Email</p>
      <input ref={email}></input>
      <p className={classes.label}>Password</p>
      <input type="password" ref={pswd}></input>

      <p className={classes.info}>
        By signing up, you agree with our privacy and usage terms
      </p>
      <button onClick={UserSignUp}>Sign up</button>
    </div>
  );
};

export default SignUp;
