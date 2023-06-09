"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/assets/Header/Frame 318.svg";
import "./header.css";
import { tallyHref } from "@/app/config/constants";
import Image from "next/image";
import Link from "next/link";
import DrawerNav from "./DrawerNav";
import { PhoneButton } from "../Ask/svg/phone";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
            {/* <Link smooth href="/#NasilCalisir">
              <li className="nav-link">Nasıl Çalışır?</li>
            </Link> */}
            <Link smooth href="/#Faydalar">
              <li className="nav-link">Faydalar</li>
            </Link>
            <Link smooth href="/#GelirPaylasimi">
              <li className="nav-link">Gelir Paylaşımı</li>
            </Link>
            <Link href="/sss">
              <li className="nav-link sss">
                {/* S.S.S. */}
                Merak Edilenler
              </li>
            </Link>
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
                    <p className="header-button-text-info">Sizi Arayalım!</p>
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
