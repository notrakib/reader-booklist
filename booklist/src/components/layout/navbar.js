import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import SignContext from "../store/signContext";
import Logo from "./logo";
import Slide from "./slide";
import classes from "./style/navbar.module.css";

const Navbar = () => {
  const context = useContext(SignContext);

  return (
    <div className={classes.main}>
      <Logo />

      <div className={classes.link}>
        {context.signedIn && (
          <Fragment>
            <NavLink to="/book-list">
              <p>My Books</p>
            </NavLink>

            <NavLink to="/reading-list/0">
              <p>Reading List</p>
            </NavLink>
            <NavLink to="/">
              <p onClick={() => context.sign_out()}>Logout</p>
            </NavLink>
          </Fragment>
        )}

        {!context.signedIn && (
          <NavLink to="/">
            <p>Sign in</p>
          </NavLink>
        )}
      </div>
      {context.result.error != null && <Slide />}
    </div>
  );
};

export default Navbar;
