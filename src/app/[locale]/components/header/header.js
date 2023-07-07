"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../../../public/assets/Header/Frame 318.svg";
import "./header.css";
import Image from "next/image";
import Link from "next/link";
import DrawerNav from "./DrawerNav";
import { PhoneButton } from "../Ask/svg/phone";
import { useTranslations } from "next-intl";
import { useCookies } from "react-cookie";
import { tallyHref } from "../../commons/commons";
const Header = () => {
  const t = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const lang = cookies["NEXT_LOCALE"];
  const langPath = lang === "tr" ? "" : "/en";
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 680 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrolled]);
  return (
    <nav>
      <div className={`header ${scrolled && "scrolled"}`}>
        <div className="">
          <a href="/">
            <Image className="logo-header" src={logo} alt="Your SVG" />
          </a>
        </div>
        <div className="navbar">
          <ul className="ul-navbar">
            <Link href={`/#NasilCalisir`}>
              <li className="nav-link">{t("navh")}</li>
            </Link>
            <Link href={`/#Faydalar`}>
              <li className="nav-link">{t("navb")}</li>
            </Link>
            <Link href={`/#GelirPaylasimi`}>
              <li className="nav-link">{t("navr")}</li>
            </Link>
            <Link href={`/sss`}>
              <li className="nav-link sss">
                {/* S.S.S. */}
                {t("navc")}
              </li>
            </Link>
            {/* <Link  href={`/${localStorage.getItem('lang') === 'lang' ? localStorage.getItem('lang') : ''}/#NasilCalisir`}>
            <li className="nav-link">{t("navh")}</li>
          </Link>
          <Link  href={`/${localStorage.getItem('lang') === 'lang' ?localStorage.getItem('lang') : ''}/#Faydalar`}>
            <li className="nav-link">{t("navb")}</li>
          </Link>
          <Link  href={`/${localStorage.getItem('lang') === 'lang' ?localStorage.getItem('lang') : ''}/#GelirPaylasimi`}>
            <li className="nav-link">{t("navr")}</li>
          </Link>
          <Link href={`/${localStorage.getItem('lang') === 'lang' ? localStorage.getItem('lang'): ''}/sss`}>
            <li className="nav-link sss">
              {t("navc")}
            </li>
          </Link> */}
          </ul>
        </div>
        <div className="nav-sm">
          <div className="header-right-action-wrapper">
            <div className="header-button">
              <a href={tallyHref}>
                <button className="header-body-button">
                  <div className="header-img-button ">
                    <PhoneButton className="phone-img-button-header "></PhoneButton>
                  </div>
                  <div className="header-button-text">
                    <p className="header-button-text-info">{t("button")}</p>
                  </div>
                </button>
              </a>
            </div>
            <div className="nav-sm-act">
              {" "}
              <DrawerNav />{" "}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;