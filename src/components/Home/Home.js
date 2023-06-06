import React from "react";
import "./Home.css";
import home from "../../assets/Header/Hero görsel.svg";
import ko from "../../assets/Header/ok0.svg";
import Metin from "./Metin";
import Benefit from "./Benefit";
import Revenue from "./Revenue";
import AskComponents from "./AskComponents";

const Home = () => {
  return (
    <>
      <div className="home-metin">
        <div className="curve">
          <img className="imagehome" src={home} alt="home" />
          <div className="metin-componenet">
            <Metin />
          </div>
          <img className="arrimg" src={ko} alt="arrow" />
        </div>
      </div>

      <Benefit />
      <Revenue />
      {/* <WildLife /> */}
      <AskComponents />
    </>
  );
};

export default Home;
