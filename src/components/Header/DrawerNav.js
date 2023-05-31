import { Button, Drawer } from "@mui/material";
import React from "react";
import "./DrawerNav.css";
import hamburgerIcon from "../../assets/Header/Hamburger.svg";
import { Link } from "react-router-dom";

const DrawerNav = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <Button onClick={() => setState(true)}>
        <img className="hamburgericon" src={hamburgerIcon} alt="hamburgerIcon"></img>
      </Button>
      <Drawer anchor="right" open={state} onClose={() => setState(false)}
      PaperProps={{
        sx: {
          backgroundColor: "#ce6d29",
          color: "white",
        }
      }}
  >
        <div className="navbar-sm">
          <ul className="ul-navbar-sm">
            <Link to="/">
              <li className="nav-link-sm">Nasıl Çalışır?</li>
            </Link>
            <Link to="/">
              <li className="nav-link-sm">Faydalar</li>
            </Link>
            <Link to="/">
              <li className="nav-link-sm">Gelir Paylaşımı</li>
            </Link>
            <Link to="/">
              <li className="nav-link-sm">S.S.S.</li>
            </Link>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerNav;
