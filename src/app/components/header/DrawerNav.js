"use client";
import { Button, Drawer } from "@mui/material";
import React from "react";
import hamburgerIcon from "../../../../public/assets/Header/Hamburger.svg";
//import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import Image from "next/image";
import Link from "next/link";
import "./DrawerNav.css";
const DrawerNav = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <Button className="button" onClick={() => setState(true)}>
        <Image
          className="hamburgericon"
          src={hamburgerIcon}
          alt="hamburgerIcon"
        ></Image>
      </Button>
      <Drawer
        onOpen={() => {}}
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
            <Link href="/#nasil">
              <li className="nav-link-sm">Nasıl Çalışır?</li>
            </Link>
            <Link href="/#Faydalar">
              <li className="nav-link-sm">Faydalar</li>
            </Link>
            {/* <HashLink to="/">
              <li className="nav-link-sm">Gelir Paylaşımı</li>
            </HashLink> */}
            <Link href="/sss">
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-link-sm"
              >
                {/* S.S.S. */}
                Sıkça Sorulan Sorular
              </li>
            </Link>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerNav;
