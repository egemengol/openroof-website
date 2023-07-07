"use client";
import "./Footer.css";
import logo from "../../../../../public/assets/Home/footer_logo.svg";
import { PhoneButton } from "../Ask/svg/phone";
import { tallyHref } from "../../commons/commons";
import Image from "next/image";
import Link from "next/link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../../LanguageSwitch";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div className="footer-copy-com">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-first">
            <Image className="footer-logo" src={logo} alt="logo" />
            <div className="footer-number">
              <p className="footer-address">{t("address")}</p>
              <p className="footer-address">{t("addressnum")}</p>
              {/* <p className="footer-address">07010 Muratpaşa/Antalya</p> */}
              <a href="tel:+90 (242) 475 07 01">
                {" "}
                <p className="footer-phone">+90 (242) 475 07 01</p>
              </a>
              <a href="mailto:info@openroof.com.tr">
                {" "}
                <p className="footer-mail">info@openroof.com.tr</p>
              </a>
              <LocaleSwitcher />
            </div>
            {/* <div className='footer-copy'>
                <p>
                ©2023 OpenRoof A.Ş. Tüm Hakları Saklıdır.
                </p>
              </div> */}
          </div>

          <div className="footer-mid">
            <p className="mid-head">{t("midhead")}</p>

            <ul className="ul-link">
              <Link  href="/#NasilCalisir">
                <li className="li-link">{t("navh")}</li>
              </Link>
              <Link  href="/#Faydalar">
                <li className="li-link">{t("navb")}</li>
              </Link>
              <Link  href="/#GelirPaylasimi">
                <li className="li-link">{t("navr")}</li>
              </Link>
              <Link  href="/sss">
                <li
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="li-link"
                >
                  {t("navc")}
                </li>
              </Link>
              <a href={tallyHref}>
                <li>{t("İletişim")}</li>
              </a>
            </ul>
          </div>
          <div className="footer-last">
            <p className="last-head">{t("last")}</p>
            <div className="last-body">
              <div className="last-body-one">
                <p className="last-body-first">
                  <a href="/sss">{t("merak")}</a>
                </p>
                <p className="last-body-mid">{t("sayfamızı")}</p>
              </div>
              <p className="last-body-mid veya">{t("veya")}</p>
            </div>
            <div className="footer-button">
              <a href={tallyHref}>
                <button className="footer-body-button">
                  <div className="footer-img-button ">
                    <PhoneButton className="phone-img-button-footer "></PhoneButton>
                  </div>
                  <div className="footer-button-text">
                    <p className="footer-button-text-info">{t("Sizi")}</p>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-copy">{t("copy")}</p>
      </div>
    </div>
  );
};

export default Footer;
