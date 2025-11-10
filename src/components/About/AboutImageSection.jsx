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
            I spent 7 years in automotive B2B/B2C sales leading multi-site teams and
            negotiating enterprise fleet contracts before pivoting to full-stack
            product delivery. That commercial rigor now fuels the way I scope, code,
            and launch digital platforms that move KPIs.
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
              I have managed quotas, coached sales reps, and sat across procurement tables,
              so I understand exactly how revenue, marketing, and operations think. Today I
              bring that context into product workshops, ensuring every technical decision
              ladders up to pipeline, margin, and retention goals.
            </p>

            <p className={styles.aboutMe}>
              I run workshops in French, Russian, English, Ukrainian, and Moldovan, align
              executives with engineering squads, and keep change management smooth through
              transparent roadmaps. The result is faster adoption and measurable business impact.
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
            As a Technical Product Specialist I still architect and code (Laravel, MERN,
            Next.js) while orchestrating the go-to-market journey end-to-end. I am as
            comfortable facilitating a discovery call with a CFO as I am reviewing pull
            requests with engineers.
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
              I thrive at the intersection of GTM strategy and engineering: defining
              roadmaps with sales leadership, translating them into technical specs, and
              iterating fast with Agile ceremonies that keep every stakeholder informed.
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
                  <strong>Commercial leadership pedigree:</strong> 7 years running B2B/B2C
                  automotive sales teams with ownership of quota, training, and negotiations.
                </li>
                <li>
                  <strong>Hands-on technical delivery:</strong> Full-stack developer building
                  Laravel, MERN, and Next.js platforms with CI/CD, performance, and security baked in.
                </li>
                <li>
                  <strong>Global collaboration:</strong> Facilitate workshops in five languages
                  and keep execs, marketers, and engineers aligned on the same KPIs.
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
                    <strong>Business impact first:</strong> Every release must show up in the
                    sales dashboard, whether that is more qualified leads, faster onboarding,
                    or better retention.
                  </li>
                  <li>
                    <strong>Full-stack mastery:</strong> PHP/Laravel, MERN, Angular, Vue, Next.js,
                    REST/GraphQL APIs, PostgreSQL, MongoDB, Drupal, CI/CD, and AI integration.
                  </li>
                  <li>
                    <strong>Agile product delivery:</strong> Scrum and Kanban rituals that keep
                    executives informed while empowering squads to ship continuously.
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
