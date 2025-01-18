"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUpVariants } from "../Works/animations";
import Image from "next/image";
import styles from "./AboutServices.module.scss";

export default function AboutServices() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves the big circle as user scrolls
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <section
      ref={containerRef}
      className={`${styles.aboutServices} ${styles.onceIn}`}
      style={{
        backgroundColor: "rgb(255, 755, 255)",
        transform: "translate(0px, 0vh)",
      }}
    >
      {/* ---------- FOURTH SECTION ---------- */}
      <motion.div
        className={styles.container}
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className={styles.row}>
          <div className={styles.flexCol}>
            <h2 className={styles.isInview}>
              I can help you with <span className={styles.animateDot}>.</span>
              <span className={styles.animateDot}>.</span>
              <span className={styles.animateDot}>.</span>
            </h2>
          </div>
        </div>

        <div className={styles.row}>
          <motion.div
            className={styles.flexCol}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h5 className={styles.number}>
              01{" "}
              <Image
                src="/images/Design.gif"
                alt="Abstract Lines"
                width={90}
                height={70}
                style={{ objectFit: "contain", verticalAlign: "middle" }}
              />
            </h5>
            <div className={styles.stripe}></div>
            <h4 className={styles.isTitle}>Design</h4>
            <p className={styles.details}>
              With a background in user-centric sales, I apply the same
              principle to web design: understanding what truly resonates with
              your audience. Let’s collaborate to create experiences that are
              both functional and visually stunning.
            </p>
          </motion.div>

          <motion.div
            className={styles.flexCol}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h5 className={styles.number}>
              02{" "}
              <Image
                src="/images/Development.png"
                alt="Abstract Lines"
                width={90}
                height={70}
                style={{ objectFit: "contain", verticalAlign: "middle" }}
              />
            </h5>
            <div className={styles.stripe}></div>
            <h4 className={styles.isTitle}>Development</h4>
            <p className={styles.details}>
              Leveraging MERN, Drupal, and other modern frameworks, I deliver
              secure, scalable solutions. My Agile approach ensures that we
              iterate quickly and efficiently to meet your business goals.
            </p>
          </motion.div>

          <motion.div
            className={styles.flexCol}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h5 className={styles.number}>
              03{" "}
              <Image
                src="/images/FullPackage.png"
                alt="Abstract Lines"
                width={90}
                height={70}
                style={{ objectFit: "contain", verticalAlign: "middle" }}
              />
            </h5>
            <div className={styles.stripe}></div>
            <h4 className={styles.isTitle}>The full package</h4>
            <p className={styles.details}>
              From concept to code, I’m your partner in crafting end-to-end
              digital products that reflect your brand and delight your
              customers—every step of the way.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Circle that moves on scroll */}
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </section>
  );
}
