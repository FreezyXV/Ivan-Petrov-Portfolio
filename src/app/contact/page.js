"use client";
import styles from "../globals.scss";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../../components/Preloader/Preloader";
import ContactSection from "../../components/Contact/ContactSection";
import Header from "../../components/Header/Header.jsx";


export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="contact" className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header styleType="contact" />
          <ContactSection />
        </>
      )}
    </main>
  );
}
