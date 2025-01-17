"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpVariants } from "../Works/animations";
import IvanImage from "../../../public/images/Background/IvanLightGrey.png";
import styles from "./AboutImageSection.module.scss";

export default function AboutImageSection() {
  const parallaxContainer = useRef(null);
  const parallaxImage = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxContainer.current || !parallaxImage.current) return;
      const rect = parallaxContainer.current.getBoundingClientRect();
      const containerHeight = parallaxContainer.current.offsetHeight;
      const offset = rect.top / window.innerHeight;

      const translateValue = Math.max(-offset * containerHeight * 0.5, 0);
      parallaxImage.current.style.transform = `translateY(${translateValue}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${styles.aboutImage} ${styles.onceIn}`}>
      <div className={styles.container}>
        {/* First Section*/}
        <motion.div
          className={styles.IntroductionContainer}
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className={styles.introduction}>
            Hello, I’m Ivan <br></br>
            <br></br>
            Before I started writing code, I spent several years in automotive
            sales, learning the ins and outs of client satisfaction, active
            listening, strategy, solution-oriented thinking and and
            problem-solving. Now, I combine those interpersonal strengths with a
            deep passion for web development—architecting systems that are easy
            to maintain and enjoyable to use.I firmly believe that a brilliant
            user experience is born from empathy, strategic thinking, and solid
            code.
          </h1>
        </motion.div>

        <div className={styles.row}>
          {/* Second Section*/}

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
              My journey from automotive sales to web development gave me a
              unique perspective: I prioritize user experience and business
              objectives above all. I’m here to build solutions that don’t just
              look good but genuinely drive results. Every new project presents
              an opportunity to innovate and push my abilities to greater
              heights—always with quality at the forefront.
            </p>
            <br />
            <br />
            <p className={styles.aboutMe}>
              My pivot from selling cars to crafting code taught me one key
              lesson: user satisfaction isn’t optional—it’s essential.
            </p>
            <br />
            <br />
            <p className={styles.aboutMe}>
              Now, as a Full Stack Developer, I marry that customer-first
              mindset with my technical expertise in MERN and Drupal to craft
              seamless, intuitive interfaces.
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
          </div>

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

          {/* Third Section*/}
          <motion.div
            className={styles.Competences}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className={styles.heading}>
              I thrive on designing solutions that meet tangible business goals
              and user needs, utilizing Agile workflows for rapid feedback and
              continuous improvements.
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
                  <strong>Business Savvy:</strong> An automotive sales
                  background helps me see the bigger picture and tailor
                  solutions to real-world needs.
                </li>
                <li>
                  <strong>Tech Expertise:</strong> Certified Full Stack
                  Developer with a knack for building optimized, clean and
                  secure applications.
                </li>
                <li>
                  <strong>Global Mindset:</strong> Fluent in English, French,
                  Russian, Ukrainian and Moldavian, I easily collaborate across
                  multi-cultural teams.
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
                    <strong>User-Centric Focus:</strong> From automotive
                    showrooms to e-commerce checkouts, it’s always about meeting
                    real needs.
                  </li>
                  <li>
                    <strong>Technical Depth:</strong> Proficient in HTML/CSS/JS,
                    React.js, Next.js, Node.js, Express, MongoDB, plus Drupal
                    for CMS solutions and more.
                  </li>
                  <li>
                    <strong>Collaborative Spirit:</strong> I embrace Agile
                    methodologies and open communication to keep the project on
                    track while dynamically refining the product at each step.
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
