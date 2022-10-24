import global from "../global";

const SignUpHandaler = async (user) => {
  return fetch(`${global.Base_URL}/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const SignInHandaler = async (user) => {
  return fetch(`${global.Base_URL}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const ForgotPassHandaler = async (user) => {
  return fetch(`${global.Base_URL}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const ConfirmPassHandaler = async (password, link) => {
  return fetch(`${global.Base_URL}/reset-password/${link}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(password),
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
  SignUpHandaler,
  SignInHandaler,
  ForgotPassHandaler,
  ConfirmPassHandaler,
};
