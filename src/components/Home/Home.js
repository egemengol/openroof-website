import React from "react";
import "./Home.css";
import home from "../../assets/Header/Hero görsel.svg";
import ko from "../../assets/Header/ok0.svg";
import Metin from "./Metin";
import Benefit from "./Benefit";
import Revenue from "./Revenue";
import AskComponents from "./AskComponents";
import RevenueSharing from "../RevenueSharing/RevenueSharing";

const Home = () => {
  return (
    <div className="app-wrapper">
      <div className="home-metin">
        <div className="curve">
          <img
            id="house-img"
            className="imagehome"
            src={home}
            alt="home"
            data-aos-once="true"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-offset="-100"
          />
          <div
            id="metin"
            className="metin-componenet"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-offset="-100"
            data-aos-once="true"
          >
            <Metin />
          </div>
          <img id="arrow-img" className="arrimg" src={ko} alt="arrow" />
        </div>
        <div className="curve-desktop">
          <img
            className="imagehome"
            src={home}
            alt="home"
            data-aos-once="true"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-offset="-100"
          />
          <div
            className="metin-componenet"
            id="metin-desktop"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-offset="-100"
            data-aos-once="true"
          >
            <Metin />
          </div>
          <img className="arrimg" src={ko} alt="arrow" />
        </div>
      </div>
      <Benefit />
      <Revenue />
      {/* <WildLife /> */}
      <RevenueSharing />
      <AskComponents />
    </div>
  );
};

export default Home;
