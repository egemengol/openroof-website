import React, { useEffect, useState } from "react";
import logo from "../../assets/Header/Frame 318.svg";
import phonecell from "../../assets/Header/phone-call 1.svg";
import "./Header.css";
//test
import { Link } from "react-router-dom";
import { PhoneButton } from "../Home/Ask/svg/phone";
import DrawerNav from "./DrawerNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrolled]);
  return (
    <nav>
      <div className={`header ${scrolled && "scrolled"}`}>
        <div className="logo-header">
          <a href="/">
            <img className=" " src={logo} alt="Your SVG" />
          </a>
        </div>
        <div className="navbar">
          <ul className="ul-navbar">
            <Link to="/">
              <li className="nav-link">Nasıl Çalışır?</li>
            </Link>
            <Link to="/">
              <li className="nav-link">Faydalar</li>
            </Link>
            <Link to="/">
              <li className="nav-link">Gelir Paylaşımı</li>
            </Link>
            <Link to="/">
              <li className="nav-link">S.S.S.</li>
            </Link>
          </ul>
        </div>
        {/* {/* <div className="nav-sm"> */}
        <div className="header-right-action-wrapper">
          <div className="header-button">
            <Link to="/">
              <button className="header-body-button">
                <div className="header-img-button ">
                  <PhoneButton className="phone-img-button-header "></PhoneButton>
                </div>
                <div className="header-button-text">
                  <p className="header-button-text-info">Sizi Arayalım!</p>
                </div>
              </button>
            </Link>
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
