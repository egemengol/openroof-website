import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
