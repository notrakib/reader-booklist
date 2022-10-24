import React, { useState } from "react";

const SignContext = React.createContext({
  user: JSON.parse(localStorage.getItem("user")),
  signedIn: localStorage.getItem("user") === null ? false : true,
  result: { error: null, message: null },
  setResultMessage: () => {},
  refreshResultMessage: () => {},
  sign_in: () => {},
  sign_out: () => {},
});

export const SignContextProvider = (props) => {
  const [signedIn, setsignedIn] = useState(
    localStorage.getItem("user") === null ? false : true
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [message, setMessage] = useState({ error: null, message: null });

  const setResultMessage = (message) => {
    setMessage(message);

    setTimeout(() => {
      setMessage({ error: null, message: null });
    }, 4000);
  };

  const refreshResultMessage = () => {
    setMessage({ error: null, message: null });
  };

  const sign_in = (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setsignedIn(true);
    setUser(user);
  };

  const sign_out = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setsignedIn(false);
    setUser(null);
  };

  return (
    <SignContext.Provider
      value={{
        user,
        signedIn,
        result: message,
        setResultMessage,
        refreshResultMessage,
        sign_in,
        sign_out,
      }}
    >
      {props.children}
    </SignContext.Provider>
  );
};

export default SignContext;
