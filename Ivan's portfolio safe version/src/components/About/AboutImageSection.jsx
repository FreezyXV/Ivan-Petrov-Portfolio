"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpVariants } from "../Works/animations";
import IvanImage from "../../../public/images/Background/IvanLightGrey.png";
import styles from "./AboutImageSection.module.scss";

import useIsDesktop from "@/hooks/useIsDesktop";

export default function AboutImageSection() {
  const isDesktop = useIsDesktop(1024);

  const parallaxContainer = useRef(null);
  const parallaxImage = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!parallaxContainer.current || !parallaxImage.current) return;
      const rect = parallaxContainer.current.getBoundingClientRect();
      const containerHeight = parallaxContainer.current.offsetHeight;
      const offset = rect.top / window.innerHeight;

      const translateValue = Math.max(-offset * containerHeight * 0.5, 0);
      parallaxImage.current.style.transform = `translateY(${translateValue}px)`;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${styles.aboutImage} ${styles.onceIn}`}>
      <div className={styles.container}>
        <motion.div
          className={styles.IntroductionContainer}
          variants={isDesktop ? fadeInUpVariants : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
        >
          <h1 className={styles.introduction}>
            Hello, I'm Ivan <br />
            <br />
            I'm a Technical Product Specialist with a unique dual profile : deep technical
            expertise in full-stack development (PHP/Laravel, MERN stack) combined with
            7+ years of client-facing experience in B2B environments. Before writing code,
            I mastered client relationships, stakeholder management, and solution-oriented
            thinking in automotive sales. Now, I bridge the gap between technical teams
            and business objectives—delivering solutions that drive measurable ROI and
            solve real user problems.
          </h1>
        </motion.div>

        <div className={styles.row}>
          <div className={styles.flexCol}>
            <div
              className={styles.arrow}
              style={{
                transform: "translate3d(0px, 0px, 0px) rotate(-38.5932deg)",
              }}
            >
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>arrow-up-right</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Artboard"
                    transform="translate(-1019.000000, -279.000000)"
                    stroke="#000"
                    strokeWidth="1.5"
                  >
                    <g
                      id="arrow-up-right"
                      transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                    >
                      <polyline
                        id="Path"
                        points="2.76923077 0 12 0 12 9.23076923"
                      ></polyline>
                      <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <p className={styles.aboutMe}>
              My approach is business-first : I don't just build features—I deliver
              solutions that drive ROI, improve KPIs, and solve real user problems.
              Whether it's migrating enterprise web ecosystems, optimizing conversion
              funnels, or designing scalable architectures, I ensure technical excellence
              aligns with business goals.
            </p>

            <p className={styles.aboutMe}>
              What sets me apart : Product mindset with user research and roadmap planning,
              technical execution with modern frameworks, proven results (+72% lead generation
              for TotalEnergies), and fluent communication between tech teams and business
              stakeholders.
            </p>

          </div>
          

          {/* PARALLAX IMAGE */}
          <div className={styles.flexCol}>
            <div ref={parallaxContainer} className={styles.parallaxContainer}>
              <Image
                ref={parallaxImage}
                src={IvanImage}
                alt="Ivan Petrov"
                className={styles.parallaxImage}
              />
            </div>
          </div>

          <p className={styles.aboutMe3}>
              As a Technical Product Specialist, I combine customer-first mindset
              with full-stack expertise (PHP/Laravel, MERN, Next.js) to deliver
              scalable platforms that drive business impact and user engagement.
            </p>
            <br />
            <p>
              <span className={styles.exploring}>
                Always exploring & pushing boundaries
                <span className={styles.animateDot}>.</span>
                <span className={styles.animateDot}>.</span>
                <span className={styles.animateDot}>.</span>
              </span>
            </p>

          <motion.div
            className={styles.Competences}
            variants={isDesktop ? fadeInUpVariants : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
          >
            <h1 className={styles.heading}>
              I thrive on product strategy and technical execution—defining roadmaps,
              prioritizing features based on business impact, and implementing solutions
              using Agile/Scrum methodologies for rapid feedback and continuous improvement.
            </h1>

            <div className={styles.standOut}>
              <h2 className={styles.subtitles}>
                Why I Stand Out{" "}
                <Image
                  src="/images/BlueBlackCircles.gif"
                  alt="Abstract Lines"
                  width={150}
                  height={150}
                  style={{ objectFit: "contain", verticalAlign: "middle" }}
                />
              </h2>
              <ul>
                <li>
                  <strong>Product & Business Acumen:</strong> ROI analysis, KPI definition,
                  user journey mapping, and stakeholder management from 7+ years in B2B environments.
                </li>
                <li>
                  <strong>Technical Excellence:</strong> Certified Full-Stack Developer building
                  scalable, performance-optimized applications with modern frameworks (Laravel, MERN, Next.js).
                </li>
                <li>
                  <strong>Global Collaboration:</strong> Fluent in French, Russian, English,
                  Ukrainian, and Moldavian—bridging technical and business teams across cultures.
                </li>
              </ul>
            </div>

            <div className={styles.drivemeMain}>
              <div className={styles.DrivesMe}>
                <h2 className={styles.subtitles2}>
                  What Drives Me{" "}
                  <Image
                    src="/images/FourShapedBlackForm.gif"
                    alt="Abstract Lines"
                    width={150}
                    height={150}
                    style={{ objectFit: "contain", verticalAlign: "middle" }}
                  />
                </h2>
                <ul className={styles.DrivesMeList}>
                  <li>
                    <strong>Business Impact First:</strong> Every solution must drive
                    measurable results—from conversion optimization to lead generation
                    and user retention.
                  </li>
                  <li>
                    <strong>Full-Stack Mastery:</strong> PHP/Laravel, MERN stack,
                    Angular, Vue.js, Next.js, TypeScript, REST/GraphQL APIs, PostgreSQL,
                    MongoDB, Drupal, CI/CD, and AI integration.
                  </li>
                  <li>
                    <strong>Agile Product Delivery:</strong> Scrum/Kanban methodologies,
                    roadmap planning, backlog management, and cross-functional team
                    coordination for successful project delivery.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
