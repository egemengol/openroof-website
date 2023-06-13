import { Button, Drawer } from "@mui/material";
import React from "react";
import "./DrawerNav.css";
import hamburgerIcon from "../../assets/Header/Hamburger.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const DrawerNav = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <Button onClick={() => setState(true)}>
        <img
          className="hamburgericon"
          src={hamburgerIcon}
          alt="hamburgerIcon"
        ></img>
      </Button>
      <Drawer
        anchor="right"
        open={state}
        onClose={() => setState(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#ce6d29",
            color: "white",
          },
        }}
      >
        <div className="navbar-sm" onClick={() => setState(false)}>
          <ul className="ul-navbar-sm">
            <HashLink smooth to="/#nasil">
              <li className="nav-link-sm">Nasıl Çalışır?</li>
            </HashLink>
            <HashLink smooth to="/#Faydalar">
              <li className="nav-link-sm">Faydalar</li>
            </HashLink>
            <HashLink to="/">
              <li className="nav-link-sm">Gelir Paylaşımı</li>
            </HashLink>
            <HashLink smooth to="/sss">
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-link-sm"
              >
                S.S.S.
              </li>
            </HashLink>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerNav;
