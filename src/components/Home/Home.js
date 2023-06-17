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
    <Helmet meta={[
      //Deniz : this is name and description  
            { name: 'OpenRoof', content: 'solar power' },
            { property: 'title', content: 'OpenRoof' },
            {
              name: 'description',
              content:
                'Hasılat Paylaşımı'
            },
            {
              name: 'description',
              content:
                'Hasılat Paylaşımı'
            },
            {
              name: 'keywords',
              content: 'solar power, OpenRoof'
            },
            { name: 'language', content: 'Turkish' },
            { property: 'og:url', content: 'https://devin.energy/' },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content:
                'solar power'
            },
            {
              property: 'og:image',
              content: 'https://www.linkpicture.com/q/Devin.svg'
            },
            {
              property: 'twitter:card',
              content: 'summary'
            },
            {
              property: 'twitter:url',
              content: 'https://devin.energy/'
            },
            {
              property: 'twitter:title',
              content: 'OpenRoof -openroof is the best'
            },
            {
              property: 'twitter:description',
              content:
                'solar power'
            },
            {
              property: 'twitter:image',
              content: 'https://www.linkpicture.com/q/Devin.svg'
            }
          ].concat()}>

    </Helmet>
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
