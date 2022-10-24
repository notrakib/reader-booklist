import Navbar from "./components/layout/navbar";
import { Route, Routes } from "react-router-dom";
import classes from "./app.module.css";
import SignIn from "./components/account/signin";
import SignUp from "./components/account/signup";
import BookList from "./components/book/bookList";
import SingleBook from "./components/book/singleBook";
import ReadingList from "./components/book/readingList";
import SignContext from "./components/store/signContext";
import { Fragment, useContext } from "react";
import ForgotPassword from "./components/account/forgotPass";
import ConfirmPassword from "./components/account/confirmPass";

const App = () => {
  const context = useContext(SignContext);

  return (
    <div className={classes.main}>
      <Navbar />
      <Routes>
        {context.signedIn && (
          <Fragment>
            <Route element={<h1>Link Invalid</h1>} path="*" />
            <Route element={<BookList />} path="/book-list" />
            <Route element={<ReadingList />} path="/reading-list/:page" />
            <Route element={<SingleBook />} path="/book-details" />
          </Fragment>
        )}
        {!context.signedIn && (
          <Fragment>
            <Route element={<SignIn />} path="/" />
            <Route element={<SignUp />} path="/sign-up" />
            <Route element={<ForgotPassword />} path="/forgot-password" />
            <Route element={<ConfirmPassword />} path="/reset-password/:link" />
          </Fragment>
        )}
      </Routes>
    </div>
  );
};

export default App;
