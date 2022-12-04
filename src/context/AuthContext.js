import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logOut: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);
  const login = (userData) => {
    setAuth(userData);
  };
  const logOut = () => {
    setAuth(undefined);
  };
  const valueContext = {
    auth,
    login,
    logOut,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
