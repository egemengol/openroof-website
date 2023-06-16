import React, { useEffect, useState } from "react";
import logo from "../../assets/Header/Frame 318.svg";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { PhoneButton } from "../Home/Ask/svg/phone";
import DrawerNav from "./DrawerNav";
import { tallyHref } from "../../commons";

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
            <img className="logo-header" src={logo} alt="Your SVG" />
          </a>
        </div>
        <div className="navbar">
          <ul className="ul-navbar">
            <HashLink smooth to="/#nasil">
              <li className="nav-link">Nasıl Çalışır?</li>
            </HashLink>
            <HashLink smooth to="/#Faydalar">
              <li className="nav-link">Faydalar</li>
            </HashLink>
            {/* <HashLink smooth to="/#Faydalar">
              <li className="nav-link">Gelir Paylaşımı</li>
            </HashLink> */}
            <Link to="/sss">
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-link sss"
              >
                {/* S.S.S. */}
                Sıkça Sorulan Sorular
              </li>
            </Link>
          </ul>
        </div>
        {/* {/* <div className="nav-sm"> */}
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
            <DrawerNav />
          </div>
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Header;
