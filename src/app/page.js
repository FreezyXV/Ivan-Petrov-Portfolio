"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import styles from "./page.module.scss";
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
    let timeoutId;

    timeoutId = window.setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    let locomotiveScroll;
    let containerStyles = null;

    const removeLocomotiveArtifacts = () => {
      const root = document.documentElement;
      const body = document.body;
      const classesToRemove = [
        "has-scroll-init",
        "has-scroll-smooth",
        "has-scroll-scrolling",
        "has-scroll-dragging",
      ];
      classesToRemove.forEach((cls) => {
        root.classList.remove(cls);
        body.classList.remove(cls);
      });
      root.style.removeProperty("overflow");
      body.style.removeProperty("overflow");
      root.style.removeProperty("height");
      body.style.removeProperty("height");
      if (containerStyles) {
        const container = containerStyles.element;
        if (container) {
          container.style.transform = "";
          container.style.willChange = "";
          container.style.height = "";
        }
      }
    };

    const init = async () => {
      const container = document.querySelector("[data-scroll-container]");
      if (!container) return;

      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll({
        el: container,
        smooth: true,
      });
      containerStyles = { element: container };
    };

    init();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
      removeLocomotiveArtifacts();
    };
  }, [isLoading]);

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
