import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/authContext";

import "./header.css";

export const Header = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setToken(window.localStorage.removeItem("token"));
    navigate("/");
  };

  const handleSubmitLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {token ? (
        <div>
          <div className="header__top">
            <h1>Registration</h1>

            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ marginRight: "10px" }}>Menin sahifam</h3>
              <button onClick={handleSubmit}>Log out</button>
            </div>
          </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      ) : (
        <>
          <div className="header__bottom">
            <h2>Header</h2>

            <button onClick={handleSubmitLogin}>Login</button>
          </div>
        </>
      )}
    </>
  );
};
