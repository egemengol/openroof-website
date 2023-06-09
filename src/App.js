import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomRouter, { browserHistory } from "./router";
import { FAQ } from "./components/FAQ";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <CustomRouter history={browserHistory}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sss" element={<FAQ />} />
        </Routes>
      </CustomRouter>
      <Footer />
    </>
  );
};

export default App;
