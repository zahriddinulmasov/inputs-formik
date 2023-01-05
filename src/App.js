import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./container/header/header";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Error } from "./pages/error/error";
import { Photos } from "./pages/photos/photos";
import {Musics} from "./pages/music/music"

import { useContext } from "react";
import { AuthContext } from "./context/authContext/authContext";
import { Login } from "./pages/login/login";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/musics" element={<Musics />} />

          <Route path="/about" element={<About />} />

          {/* <Route path="*" element={<Error />} /> */}

          {token ? (
            <Route path="*" element={<Error />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
