"use client";
import styles from "../globals.scss";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../../components/Preloader/Preloader";
import AboutHeader from "../../components/About/AboutHeader";
import GlobeSection from "../../components/About/GlobeSection";
import AboutImageSection from "../../components/About/AboutImageSection";
import AboutServices from "../../components/About/AboutServices";
import Contact from "../../components/Footer/Footer";
import Header from "../../components/Header/Header.jsx";

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="about" className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header styleType="about" />
          <AboutHeader />
          <GlobeSection />
          <AboutImageSection />
          <AboutServices />
          <Contact />
        </>
      )}
    </main>
  );
}
