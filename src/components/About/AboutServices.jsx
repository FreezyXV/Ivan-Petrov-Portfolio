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
            <h4 className={styles.isTitle}>Product Strategy & Roadmap Planning</h4>
            <p className={styles.details}>
            I connect commercial OKRs with technical feasibility by running joint workshops with sales, marketing, and engineering. Together we translate customer pain points into prioritized backlogs, success metrics, and sprint-ready scopes.
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
            <h4 className={styles.isTitle}>Technical Solutions Architecture</h4>
            <p className={styles.details}>
            I architect and build scalable platforms (Laravel, MERN, Next.js) that keep revenue teams in the loop. Expect discovery recordings turned into specs, clean APIs, observability, and CI/CD so the product can evolve as fast as your market.
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
            <h4 className={styles.isTitle}>Digital Transformation & Client Solutions</h4>
            <p className={styles.details}>
            I lead complex web ecosystem migrations and digital programs end-to-end, from stakeholder alignment to change management. My sales background helps onboard field teams, while my engineering chops guarantee business continuity and measurable ROI.
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
