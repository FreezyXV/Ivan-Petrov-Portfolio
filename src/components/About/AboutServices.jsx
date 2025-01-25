"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUpVariants } from "../Works/animations";
import Image from "next/image";
import styles from "./AboutServices.module.scss";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function AboutServices() {
  const isDesktop = useIsDesktop(1024);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const circleHeight = useTransform(
    scrollYProgress,
    [0, 0.9],
    isDesktop ? [50, 0] : [50, 50]
  );

  return (
    <section
      ref={containerRef}
      className={`${styles.aboutServices} ${styles.onceIn}`}
      style={{
        backgroundColor: "rgb(255, 755, 255)",
        transform: "translate(0px, 0vh)",
      }}
    >
      <motion.div
        className={styles.container}
        variants={isDesktop ? fadeInUpVariants : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
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
            variants={isDesktop ? fadeInUpVariants : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
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
              principle to web design...
            </p>
          </motion.div>

          <motion.div
            className={styles.flexCol}
            variants={isDesktop ? fadeInUpVariants : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
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
              Leveraging MERN, Drupal, and other modern frameworks...
            </p>
          </motion.div>

          <motion.div
            className={styles.flexCol}
            variants={isDesktop ? fadeInUpVariants : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
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
              From concept to code, I’m your partner in crafting end-to-end...
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ height: circleHeight }}
        className={styles.circleContainer}
      >
        {isDesktop && <div className={styles.circle}></div>}
      </motion.div>
    </section>
  );
}
