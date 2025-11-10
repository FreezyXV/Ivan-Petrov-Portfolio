"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import defaultStyles from "./style.module.scss";
import aboutStyles from "../About/AboutHeader.module.scss";
import workStyles from "../Works/WorkHeader.module.scss";
import contactStyles from "../Contact/contactHeader.module.scss";

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
      : defaultStyles;

  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let triggers = [];

    if (!isActive) {
      if (pathname === "/") {
        triggers.push(
          gsap.to(buttonRef.current, {
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top+=100 top",
              toggleActions: "play none none reverse",
            },
            scale: 1,
            duration: 0.3,
            ease: "power1.out",
          })
        );
      } else {
        triggers.push(
          gsap.to(buttonRef.current, {
            scrollTrigger: {
              trigger: document.documentElement,
              start: 0,
              end: window.innerHeight,
              onLeave: () =>
                gsap.to(buttonRef.current, {
                  scale: 1,
                  duration: 0.25,
                  ease: "power1.out",
                }),
              onEnterBack: () =>
                gsap.to(buttonRef.current, {
                  scale: 0,
                  duration: 0.25,
                  ease: "power1.out",
                }),
            },
          })
        );
      }
    } else {
      gsap.set(buttonRef.current, { scale: 1 });
    }

    // Cleanup
    return () => {
      triggers.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        t.kill();
      });
    };
  }, [isActive, pathname]);

  return (
    <>
      <header className={currentStyles.header} ref={headerRef}>
        {/* Logo */}
        <div className={currentStyles.logoMain} role="button" tabIndex="0">
          <Link href="/">
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

        {/* Desktop Nav */}
        <nav
          className={`${currentStyles.nav} ${
            isActive ? currentStyles.hidden : ""
          }`}
        >
          <Magnetic>
            <div className={currentStyles.el}>
              <Link href="/works">Work</Link>
              <div className={currentStyles.indicator} />
            </div>
          </Magnetic>
          <Magnetic>
            <div className={currentStyles.el}>
              <Link href="/about">About</Link>
              <div className={currentStyles.indicator} />
            </div>
          </Magnetic>
          <Magnetic>
            <div className={currentStyles.el}>
              <Link href="/contact">Contact</Link>
              <div className={currentStyles.indicator} />
            </div>
          </Magnetic>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className={currentStyles.menuButton}>
          <Magnetic>
            <button
              onClick={() => setIsActive((prev) => !prev)}
              className={currentStyles.menuToggleButton}
            >
              Menu
            </button>
          </Magnetic>
        </div>
      </header>

      {/* Float/Rounded Button */}
      <div ref={buttonRef} className={currentStyles.headerButtonContainer}>
        <Rounded
          onClick={() => setIsActive((prev) => !prev)}
          className={currentStyles.button}
        >
          <div
            className={`${currentStyles.burger} ${
              isActive ? currentStyles.burgerActive : ""
            }`}
          />
        </Rounded>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence mode="wait">
        {isActive && <Navigation />}
      </AnimatePresence>
    </>
  );
}
