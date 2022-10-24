import global from "../global";

const FetchBook = async () => {
  return fetch(`${global.Base_URL}/get-book`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const AddNewBook = async (book) => {
  return fetch(`${global.Base_URL}/add-book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(book),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const UpdateBook = async (book) => {
  return fetch(`${global.Base_URL}/update-book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(book),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const DeleteBook = async (bookId) => {
  return fetch(`${global.Base_URL}/delete-book/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

export { AddNewBook, UpdateBook, FetchBook, DeleteBook };
