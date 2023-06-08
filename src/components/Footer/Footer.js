import React from "react";
import "./Footer.css";
import logo from "../../assets/Header/Frame 318.svg";
import { Link } from "react-router-dom";
import phonecell from "../../assets/Header/phone-call 1.svg";
import { PhoneButton } from "../Home/Ask/svg/phone";

const Footer = () => {
  return (
    <div className="footer-copy-com">
      <div className="footer">
        <div className="footer-first">
          <img className="footer-logo" src={logo} alt="logo" />

          <div className="footer-number">
            <p className="footer-address">Adres Mah. Adres Sk.</p>
            <p className="footer-address">No: 123/123</p>
            <p className="footer-address">Muratpaşa/Antalya</p>

            <a href="tel:0 (242) 323 32 32">
              {" "}
              <p className="footer-phone">0 (242) 323 32 32</p>
            </a>
            <a href="mailto:info@openroof.com.tr">
              {" "}
              <p className="footer-mail">info@openroof.com.tr</p>
            </a>
          </div>
          {/* <div className='footer-copy'>
                <p>
                ©2023 OpenRoof A.Ş. Tüm Hakları Saklıdır.
                </p>
            </div> */}
        </div>
        <div className="footer-mid">
          <p className="mid-head">Site Haritası</p>

          <ul className="ul-link">
            <Link to="/">
              <li className="li-link">Nasıl Çalışır?</li>
            </Link>
            <Link to="/">
              <li className="li-link">Faydalar</li>
            </Link>
            <Link to="/">
              <li className="li-link">Gelir Paylaşımı</li>
            </Link>
            <Link to="/">
              <li className="li-link">S.S.S.</li>
            </Link>
          </ul>
        </div>
        <div className="footer-last">
          <p className="last-head">Sorularınız mı var?</p>
          <div className="last-body">
            <div className="last-body-one">
              <p className="last-body-first">Sıkça Sorulan Sorular</p>
              <p className="last-body-mid">sayfamızı ziyaret edin</p>
            </div>
            <p className="last-body-mid veya">veya</p>
          </div>
          <div className=" footer-button">
            <a href="https://tally.so#tally-open=mKeeAg&tally-layout=modal&tally-overlay=1&tally-width=500&tally-emoji-text=☀️&tally-emoji-animation=wave&tally-auto-close=2000">
              <button className="footer-body-button">
                {/* <div className="footer-img-button">
                    <img src={phonecell} alt="phone-cell" />
                </div> */}
                <div className="footer-img-button ">
                  <PhoneButton className="phone-img-button-footer "></PhoneButton>
                </div>
                <div className="footer-button-text">
                  <p className="footer-button-text-info">Sizi Arayalım!</p>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copy">©2023 OpenRoof A.Ş. Tüm Hakları Saklıdır.</p>
    </div>
  );
};

export default Footer;
