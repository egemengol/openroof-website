"use client";
import "./Footer.css";
import logo from "../../../../public/assets/Home/footer_logo.svg";
import { PhoneButton } from "../Ask/svg/phone";
import { tallyHref } from "../../commons/commons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-copy-com">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-first">
            <Image className="footer-logo" src={logo} alt="logo" />
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
              <Link smooth href="/#NasilCalisir">
                <li className="li-link">Nasıl Çalışır?</li>
              </Link>
              <Link smooth href="/#Faydalar">
                <li className="li-link">Faydalar</li>
              </Link>
              <Link smooth href="/#GelirPaylasimi">
                <li className="li-link">Gelir Paylaşımı</li>
              </Link>
              <Link smooth href="/sss">
                <li
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="li-link"
                >
                  Merak Edilenler
                </li>
              </Link>
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
                  <a href="/sss">Merak Edilenler</a>
                </p>
                <p className="last-body-mid">sayfamızı ziyaret edin</p>
              </div>
              <p className="last-body-mid veya">veya</p>
            </div>
            <div className="footer-button">
              <a href={tallyHref}>
                <button className="footer-body-button">
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
        <p className="footer-copy">
          ©2023 OpenRoof Enerji A.Ş. Tüm Hakları Saklıdır.
        </p>
      </div>
    </div>
  );
};

export default Footer;
