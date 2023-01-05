import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const initialToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(initialToken);

  useEffect(() => {
    if (token) {
      return localStorage.setItem("token", JSON.stringify(token));
    }

    localStorage.removeItem("token");
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
