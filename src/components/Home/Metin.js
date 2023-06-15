import React from "react";
import phonecell from "../../assets/Header/phone-call 1.svg";
import { Link } from "react-router-dom";
import "./Metin.css";
import { PhoneButton } from "./Ask/svg/phone";
import { tallyHref } from "../../commons";
const Metin = () => {
  return (
    <div className="metin-page">
      <div>
        <p className="metin-head">
          <strong className="metin-head">DÜŞÜK</strong> Yatırım
        </p>
        <p className="metin-head">
          <strong className="metin-head">YÜKSEK</strong>Getiri
        </p>
        <p className="metin-head">
          <strong className="metin-head">MİNİMAL</strong> Risk
        </p>
      </div>

      <div className="metin-body">Yatırımlarınızı Güneşin Gücüyle Büyütün!</div>
      <div className="metin-button">
        <a href={tallyHref}>
          <button className="metin-body-button">
            <div className="metin-img-button ">
              <PhoneButton className="phone-img-button "></PhoneButton>
            </div>
            <div className="metin-button-text">
              <p className="metin-button-text-info">Sizi Arayalım!</p>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Metin;
