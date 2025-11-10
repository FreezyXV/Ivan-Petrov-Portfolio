"use client";
import styles from "../page.module.scss";
import React, { useRef, useState, useEffect } from "react";
import WorksSection from "../../components/Works/WorksSection";
import AboutWorks from "../../components/Works/AboutWorks";
import { AnimatePresence } from "framer-motion";
import Preloader from "../../components/Preloader/Preloader";
import Contact from "../../components/Footer/Footer";
import Header from "../../components/Header/Header.jsx";

export default function WorksPage() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      ref={containerRef}
      id="work"
      data-barba="container"
      data-barba-namespace="work"
      style={{ overflowX: "hidden" }}
      className={styles.main}
    >
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header styleType="work" />
          <WorksSection />
          <AboutWorks />
          <Contact />
        </>
      )}
    </main>
  );
}
