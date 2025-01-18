"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import aboutStyles from "../About/AboutHeader.module.scss";
import contactStyles from "../Contact/contactHeader.module.scss";
import workStyles from "../Works/WorkHeader.module.scss";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Navigation from "./nav/Navigation";
import Rounded from "../../common/RoundedButton/RoundedButton";
import Magnetic from "../../common/Magnetic/Magnetic";

export default function Header({ styleType }) {
  const [isActive, setIsActive] = useState(false);

  const currentStyles =
    styleType === "about"
      ? aboutStyles
      : styleType === "contact"
      ? contactStyles
      : styleType === "work"
      ? workStyles
      : styles;

  return (
    <>
      <header className={currentStyles.header}>
        {/* Logo Link */}
        <div className={currentStyles.logoMain} role="button" tabIndex="0">
          <Link href="/" passHref>
            <div className={currentStyles.logo}>
              <p className={currentStyles.copyright}>©</p>
              <div className={currentStyles.name}>
                <p className={currentStyles.codeBy}>Code by</p>
                <p className={currentStyles.ivan}>Ivan</p>
                <p className={currentStyles.petrov}>Petrov</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Navigation */}
        <nav className={currentStyles.nav}>
          <Magnetic>
            <div className={currentStyles.el}>
              <Link href="/works">Work</Link>
              <div className={currentStyles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={currentStyles.el}>
              <Link href="/about">About</Link>
              <div className={currentStyles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={currentStyles.el}>
              <Link href="/contact">Contact</Link>
              <div className={currentStyles.indicator}></div>
            </div>
          </Magnetic>
        </nav>
      </header>

      {/* Button */}
      <div className={currentStyles.headerButtonContainer}>
        <Rounded
          onClick={() => setIsActive(!isActive)}
          className={currentStyles.button}
        >
          <div
            className={`${currentStyles.burger} ${
              isActive ? currentStyles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>

      {/* Navigation Menu */}
      <AnimatePresence>{isActive && <Navigation />}</AnimatePresence>
    </>
  );
}
