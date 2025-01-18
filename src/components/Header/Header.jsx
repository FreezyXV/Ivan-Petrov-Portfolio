"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";
import aboutStyles from "../About/AboutHeader.module.scss";
import contactStyles from "../Contact/contactHeader.module.scss";
import workStyles from "../Works/WorkHeader.module.scss";
import Link from "next/link";
import Navigation from "./nav/Navigation";
import Rounded from "../../common/RoundedButton/RoundedButton";
import Magnetic from "../../common/Magnetic/Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const header = useRef(null);
  const button = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () =>
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          }),
        onEnterBack: () =>
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          }),
      },
    });
  }, []);

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
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => setIsActive((prev) => !prev)}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>

      {/* Navigation Menu */}
      <AnimatePresence mode="wait">
        {isActive && <Navigation />}
      </AnimatePresence>
    </>
  );
}
