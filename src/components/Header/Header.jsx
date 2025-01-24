// "use client";

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
// import { AnimatePresence } from "framer-motion";
// import styles from "./style.module.scss";
// import aboutStyles from "../About/AboutHeader.module.scss";
// import contactStyles from "../Contact/contactHeader.module.scss";
// import workStyles from "../Works/WorkHeader.module.scss";
// import Link from "next/link";
// import Navigation from "./nav/Navigation";
// import Rounded from "../../common/RoundedButton/RoundedButton";
// import Magnetic from "../../common/Magnetic/Magnetic";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function Header({ styleType }) {
//   const [isActive, setIsActive] = useState(false);

//   const currentStyles =
//   styleType === "about"
//     ? aboutStyles
//     : styleType === "contact"
//     ? contactStyles
//     : styleType === "work"
//     ? workStyles
//     : styles;


//   const header = useRef(null);
//   const button = useRef(null);
//   const pathname = usePathname();

//   // Reset menu state on route change
//   useEffect(() => {
//     setIsActive(false);
//   }, [pathname]);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (isActive) {
//       return;
//     }

//     if (pathname === "/") {
//       gsap.to(button.current, {
//         scrollTrigger: {
//           trigger: document.documentElement,
//           start: "top+=100 top",
//           toggleActions: "play none none reverse",
//         },
//         scale: 1,
//         duration: 0.3,
//         ease: "power1.out",
//       });
//     } else {
//       gsap.to(button.current, {
//         scrollTrigger: {
//           trigger: document.documentElement,
//           start: 0,
//           end: window.innerHeight,
//           onLeave: () =>
//             gsap.to(button.current, {
//               scale: 1,
//               duration: 0.25,
//               ease: "power1.out",
//             }),
//           onEnterBack: () =>
//             gsap.to(button.current, {
//               scale: 0,
//               duration: 0.25,
//               ease: "power1.out",
//             }),
//         },
//       });
//     }
//   }, [isActive, pathname]);

//   return (
//     <>
//       <header className={currentStyles.header}>
//         {/* Logo Link */}
//         <div className={currentStyles.logoMain} role="button" tabIndex="0">
//           <Link href="/" passHref>
//             <div className={currentStyles.logo}>
//               <p className={currentStyles.copyright}>©</p>
//               <div className={currentStyles.name}>
//                 <p className={currentStyles.codeBy}>Code by</p>
//                 <p className={currentStyles.ivan}>Ivan</p>
//                 <p className={currentStyles.petrov}>Petrov</p>
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav
//           className={`${currentStyles.nav} ${
//             isActive ? currentStyles.hidden : ""
//           }`}
//         >
//           <Magnetic>
//             <div className={currentStyles.el}>
//               <Link href="/works">Work</Link>
//               <div className={currentStyles.indicator}></div>
//             </div>
//           </Magnetic>
//           <Magnetic>
//             <div className={currentStyles.el}>
//               <Link href="/about">About</Link>
//               <div className={currentStyles.indicator}></div>
//             </div>
//           </Magnetic>
//           <Magnetic>
//             <div className={currentStyles.el}>
//               <Link href="/contact">Contact</Link>
//               <div className={currentStyles.indicator}></div>
//             </div>
//           </Magnetic>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className={currentStyles.menuButton}>
//           <Magnetic>
//             <button
//               onClick={() => setIsActive((prev) => !prev)}
//               className={currentStyles.menuToggleButton}
//             >
//               Menu
//             </button>
//           </Magnetic>
//         </div>
//       </header>

//       {/* Rounded Button */}
//       <div ref={button} className={styles.headerButtonContainer}>
//         <Rounded
//           onClick={() => setIsActive((prev) => !prev)}
//           className={styles.button}
//         >
//           <div
//             className={`${styles.burger} ${
//               isActive ? styles.burgerActive : ""
//             }`}
//           ></div>
//         </Rounded>
//       </div>

//       {/* Navigation Menu */}
//       <AnimatePresence mode="wait">
//         {isActive && <Navigation />}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Page-specific style modules
import defaultStyles from "./style.module.scss"; // Default fallback
import aboutStyles from "../About/AboutHeader.module.scss";
import workStyles from "../Works/WorkHeader.module.scss";
import contactStyles from "../Contact/contactHeader.module.scss";

import Navigation from "./nav/Navigation";
import Rounded from "../../common/RoundedButton/RoundedButton";
import Magnetic from "../../common/Magnetic/Magnetic";

export default function Header({ styleType }) {
  const [isActive, setIsActive] = useState(false);

  /**
   * Conditionally load the style module depending on styleType
   * "about" -> aboutStyles
   * "contact" -> contactStyles
   * "work" -> workStyles
   * otherwise -> defaultStyles
   */
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

  // Close menu on route change
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  // Example useLayoutEffect for scroll-based button animation
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // If the mobile nav is open, skip animations
    if (isActive) return;

    // If on homepage, scale in the button after scrolling 100px
    if (pathname === "/") {
      gsap.to(buttonRef.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top+=100 top",
          toggleActions: "play none none reverse",
        },
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    } else {
      // On other pages, scale in the button after leaving viewport
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
      });
    }
  }, [isActive, pathname]);

  return (
    <>
      {/* Use currentStyles.* everywhere */}
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
