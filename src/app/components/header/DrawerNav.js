"use client";
import { Button, Drawer } from "@mui/material";
import React from "react";
import hamburgerIcon from "../../../../public/assets/Header/Hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import "./DrawerNav.css";
import {useTranslations} from 'next-intl';
const DrawerNav = () => {
  const t = useTranslations('header');
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
            <Link smooth href="/#NasilCalisir">
              <li className="nav-link-sm">{t('navh')}</li>
            </Link>
            <Link smooth href="/#Faydalar">
              <li className="nav-link-sm">{t('navb')}</li>
            </Link>
            <Link href="/#GelirPaylasimi">
              <li className="nav-link-sm">{t('navr')}</li>
            </Link>
            <Link smooth href="/sss">
              <li className="nav-link-sm">
                {/* S.S.S. */}
                {t('navc')}
              </li>
            </Link>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerNav;
