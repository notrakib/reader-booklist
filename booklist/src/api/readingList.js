import global from "../global";

const AddToReadingList = async (bookId) => {
  return fetch(`${global.Base_URL}/add-to-list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(bookId),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const FetchReadingList = async (page) => {
  return fetch(`${global.Base_URL}/get-all-books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(page),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const ToggleFavourite = async (readingListId) => {
  return fetch(`${global.Base_URL}/toggle-favourite/${readingListId}`, {
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

const ChangeStatus = async (status, readingListId) => {
  return fetch(`${global.Base_URL}/change-status/${readingListId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(status),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const FilterList = async (bookId) => {
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

export {
  AddToReadingList,
  ToggleFavourite,
  ChangeStatus,
  FilterList,
  FetchReadingList,
};
