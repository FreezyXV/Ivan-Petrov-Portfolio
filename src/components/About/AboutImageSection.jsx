"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpVariants } from "../Works/animations";
import IvanImage from "../../../public/images/IvanAvatar.jpeg";
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
            I'm a Business Analyst working at the interface between business teams and IT.
            My hybrid AMOA & Tech profile makes me the convergence point between business
            teams, IT, and clients — from C-level stakeholders to development teams.
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
              My approach is business-first: I make sure a business need is fully understood —
              and correctly written down — before a single line of code is discussed. Whether
              coordinating a CMS migration across international sites or aligning a delivery
              team on UAT criteria, I keep business intent and technical delivery in sync.
            </p>

            <p className={styles.aboutMe}>
              What sets me apart from a purely functional profile: hands-on technical literacy
              (SQL, REST APIs, Drupal) that lets me read and challenge a technical solution
              without needing to own the development myself, combined with a premium B2B/B2C
              commercial background (2019–2023, ~€14M cumulative revenue) that keeps me focused
              on business value and stakeholder buy-in.
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
              Proven results at TotalEnergies (2024–2025): 98 user stories delivered with
              95% UAT acceptance, 108 web pages created and optimized, -35% form abandonment,
              +40% form completions, +26% incoming leads — coordinating 5 international teams
              and conducting 45+ business/IT workshops.
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
              I focus on functional scoping and delivery governance — running discovery
              workshops, writing user stories with clear acceptance criteria, prioritizing
              the backlog (RICE/MoSCoW), and steering UAT through to sign-off using
              Agile/Scrum methodologies.
            </h1>

            <div className={styles.standOut}>
              <h2 className={styles.subtitles}>
                My Background{" "}
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
                  <strong>Discovery & Analysis:</strong> needs-gathering workshops, functional
                  specifications, process mapping (BPMN), user journeys, gap analysis — across
                  B2B/B2C digital products and digital transformation projects.
                </li>
                <li>
                  <strong>Technical Literacy:</strong> SQL, REST APIs, Postman, Drupal 7/10 —
                  enough to read and challenge a technical solution without carrying the
                  development myself.
                </li>
                <li>
                  <strong>Business Acumen:</strong> premium B2B/B2C client relationships
                  (2019–2023, ~360 vehicles sold, €14M revenue), stakeholder management,
                  complex negotiation — fluent in 5 languages (FR C2, RU C2, EN C1, UA C1,
                  MD C1) for multicultural environments.
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
                    <strong>Measurable Business Impact:</strong> I write specifications that are
                    judged by outcomes — lead generation, conversion, form completion, adoption —
                    always with clear KPIs.
                  </li>
                  <li>
                    <strong>Business/IT Bridge:</strong> I translate complex business needs into
                    specifications a development team can act on directly, and challenge technical
                    proposals when they drift from business intent.
                  </li>
                  <li>
                    <strong>Agile Delivery:</strong> I run backlog, sprint ceremonies and UAT with
                    Jira, Confluence, Figma, Google Analytics, and Miro to keep cross-functional
                    teams aligned.
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
