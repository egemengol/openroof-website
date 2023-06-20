"use client";
import "./Home.css";
import Image from "next/image";
import home from "../../public/assets/Header/Hero görsel.svg";
import ko from "../../public/assets/Header/ok0.svg";
import Metin from "./components/metin/Metin";
import Benefit from "./components/benefit/Benefit";
import Revenue from "./components/revenue/Revenue";
import RevenueSharing from "./components/RevenueSharing/RevenueSharing";
import AskComponents from "./components/askcomponent/AskComponents";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({ delay: 300, once: true });
  }, []);
  return (
    <div className="app-wrapper">
      <div className="home-metin">
        <div className="curve">
          <Image
            id="house-img"
            className="imagehome"
            src={home}
            alt="home"
            data-aos="fade-down"
          />
          <div id="metin" data-aos="fade-down" className="metin-componenet">
            <Metin />
          </div>
          <Image id="arrow-img" className="arrimg" src={ko} alt="arrow" />
        </div>
        <div className="curve-desktop">
          <Image
            className="imagehome"
            data-aos="fade-down"
            src={home}
            alt="home"
          />
          <div
            className="metin-componenet"
            data-aos="fade-down"
            id="metin-desktop"
          >
            <Metin />
          </div>
          <Image className="arrimg" src={ko} alt="arrow" />
        </div>
      </div>
      <Benefit />
      <Revenue />
      {/* <WildLife /> */}
      <RevenueSharing />
      <AskComponents />
    </div>
  );
}
