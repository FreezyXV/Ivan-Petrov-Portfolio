"use client";
import styles from "./globals.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/Preloader";
import Landing from "../components/Landing/Landing";
import Projects from "../components/Projects/Projects";
import Description from "../components/Description/Description";
import SlidingImages from "../components/SlidingImages/SlidingImages";
import Contact from "../components/Footer/Footer";
import Header from "../components/Header/Header.jsx";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);

      // Clean up LocomotiveScroll instance
      return () => locomotiveScroll.destroy();
    })();
  }, []);

  return (
    <main className={styles.main} data-scroll-container>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Header styleType="home" />

      {!isLoading && (
        <>
          <Landing />
          <Description />
          <Projects />
          <SlidingImages />
          <Contact />
        </>
      )}
    </main>
  );
}
