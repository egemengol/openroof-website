import React from "react";
import "./Home.css";
import home from "../../assets/Header/Hero görsel.svg";
import ko from "../../assets/Header/ok0.svg";
import Metin from "./Metin";
import Benefit from "./Benefit";
import Revenue from "./Revenue";
import AskComponents from "./AskComponents";
import RevenueSharing from "../RevenueSharing/RevenueSharing";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet
        meta={[
          //DENIZ: here we have information about the website and description
          { name: "OpenRoof", content: "solar power" },
          //DENIZ: Here is the title
          { property: "title", content: "OpenRoof" },
          //DENIZ: description
          {
            name: "description",
            content: "Hasılat Paylaşımı",
          },
          {
            name: "keywords",
            //DENIZ: keywords searched in google to find the website
            content: "solar power, OpenRoof",
          },
          //DENIZ: language of the website
          { name: "language", content: "Turkish" },
          //DENIZ: URL of the website
          { property: "og:url", content: "PASTE_URL_HERE" },
          { property: "og:type", content: "website" },
          {
            property: "og:description",
            //DENIZ: description of the website
            content: "solar power",
          },
          {
            property: "og:image",
            //DENIZ: image of the website when it is shared
            content: "https://www.linkpicture.com/q/Devin.svg",
          },
          {
            property: "twitter:card",
            content: "summary",
          },
          {
            property: "twitter:url",
            //DENIZ: URL of the website when it is shared in twitter
            content: "https://devin.energy/",
          },
          {
            property: "twitter:title",
            //DENIZ: Title of the website when it is shared in twitter
            content: "OpenRoof -openroof is the best",
          },
          {
            property: "twitter:description",
            //DENIZ: description of the website when it is shared in twitter
            content: "solar power",
          },
          {
            property: "twitter:image",
            //DENIZ: image of the website when it is shared in twitter
            content: "https://www.linkpicture.com/q/Devin.svg",
          },
        ].concat()}
      ></Helmet>
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
            />
            <div
              id="metin"
              className="metin-componenet"
              data-aos="fade-down"
              data-aos-delay="300"
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
            />
            <div
              className="metin-componenet"
              id="metin-desktop"
              data-aos="fade-down"
              data-aos-delay="300"
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
    </>
  );
};

export default Home;
