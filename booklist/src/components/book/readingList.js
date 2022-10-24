import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FetchReadingList } from "../../api/readingList";
import SignContext from "../store/signContext";
import ReadingListBook from "./readinglistBook";
import classes from "./style/readingList.module.css";

const ReadingList = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const params = useParams();

  useEffect(() => {
    FetchReadingList({ offset: +params.page })
      .then((book) => setBooks(book))
      .catch();
  }, [params.page]);

  return (
    <div className={classes.main}>
      <h3>Hi {context.user.fname || "anon"} here's your reading list</h3>

      <div>
        {books.map((each) => {
          return <ReadingListBook key={each.readingListId} book={each} />;
        })}
      </div>

      <div className={classes.page}>
        <button onClick={() => navigate("/reading-list/0")}>1</button>
        <button onClick={() => navigate("/reading-list/1")}>2</button>
        <button onClick={() => navigate("/reading-list/2")}>3</button>
        <button onClick={() => navigate("/reading-list/3")}>4</button>
        <button onClick={() => navigate("/reading-list/4")}>5</button>
      </div>
    </div>
  );
};

export default ReadingList;
