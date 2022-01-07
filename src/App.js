import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Friends from "./pages/Friends";

import styles from "./styles/App.module.css"
export default function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Routes>
        <Route path="/prism" element={<Home />} exact />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}
