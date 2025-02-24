"use client";
import styles from "./AboutHeader.module.scss";
import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <header
      className={styles.aboutHeader}
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.aboutTitle}
      >
Elevating User-Focused Digital Solutions
Where Business Insight Meets Modern Development
        
      </motion.h2>
    </header>
  );
}
