import React from "react";
import "./Footer.css";
import logo from "../../assets/Home/footer_logo.svg";
import { Link } from "react-router-dom";
import phonecell from "../../assets/Header/phone-call 1.svg";
import { PhoneButton } from "../Home/Ask/svg/phone";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { tallyHref } from "../../commons";

const Footer = () => {
  return (
    <div className="footer-copy-com">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-first">
            <img className="footer-logo" src={logo} alt="logo" />
            <div className="footer-number">
              <p className="footer-address">
                Etiler, REMEL PLAZA, Evliya Çelebi Cd.
              </p>
              <p className="footer-address">
                No:23/106, 07010, Muratpaşa/Antalya
              </p>
              {/* <p className="footer-address">07010 Muratpaşa/Antalya</p> */}
              <a href="tel:+90 (242) 475 07 01">
                {" "}
                <p className="footer-phone">+90 (242) 475 07 01</p>
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
              <HashLink smooth to="/#nasil">
                <li className="li-link">Nasıl Çalışır?</li>
              </HashLink>
              <HashLink smooth to="/#Faydalar">
                <li className="li-link">Faydalar</li>
              </HashLink>
              {/* <HashLink smooth to="/#Faydalar">
                <li className="li-link">Gelir Paylaşımı</li>
              </HashLink> */}
              <HashLink smooth to="/sss">
                <li
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="li-link"
                >
                  Sıkça Sorulan Sorular
                </li>
              </HashLink>
              <a href={tallyHref}>
                <li>İletişim Formu</li>
              </a>
            </ul>
          </div>
          <div className="footer-last">
            <p className="last-head">Sorularınız mı var?</p>
            <div className="last-body">
              <div className="last-body-one">
                <p className="last-body-first">
                  <a href="/sss">Sıkça Sorulan Sorular</a>
                </p>
                <p className="last-body-mid">sayfamızı ziyaret edin</p>
              </div>
              <p className="last-body-mid veya">veya</p>
            </div>
            <div className="footer-button">
              <a href={tallyHref}>
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
    </div>
  );
};

export default Footer;
