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
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!parallaxContainer.current || !parallaxImage.current) {
            ticking = false;
            return;
          }
          const rect = parallaxContainer.current.getBoundingClientRect();
          const containerHeight = parallaxContainer.current.offsetHeight;
          const offset = rect.top / window.innerHeight;

          const translateValue = Math.max(-offset * containerHeight * 0.5, 0);
          parallaxImage.current.style.transform = `translateY(${translateValue}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
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
          viewport={isDesktop ? { once: true, amount: 0.3 } : {}}
        >
          <h1 className={styles.introduction}>
            Hello, I'm Ivan <br />
            <br />
            I'm a value-driven Product Owner with 7+ years in B2B/B2C digital products
            and digital transformation. My hybrid Product, Business & Tech profile makes me
            the convergence point between business teams, IT, and clients. I combine AMOA
            expertise with full-stack development skills (React, Drupal, MERN, Laravel,
            Angular, Next.js) and proven business acumen to prioritize and deliver solutions
            with measurable impact and ROI.
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
              My approach is business-first: I build solutions that address real user needs
              while generating measurable business results. Whether managing digital transformation
              of international sites, optimizing conversion funnels, or architecting scalable
              platforms, I align technical execution with business objectives.
            </p>

            <p className={styles.aboutMe}>
              What differentiates me from "purely functional" Product Owners: I combine Product
              expertise (Backlog Management, User Stories, Sprint Planning, OKRs), full-stack
              technical skills (React, Drupal 7-10, MERN, Laravel, API REST), and business acumen
              (7 years B2B/B2C client relationships, ROI analysis, stakeholder management). This
              rare combination enables me to technically challenge teams while maintaining business focus.
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
              Proven results at TotalEnergies (2024-2025): 98 user stories delivered with
              95% UAT acceptance, 108 web pages created and optimized, -35% cart abandonment,
              +40% form completions, +26% incoming leads — managing 5 international teams
              and conducting 45+ business/IT requirement workshops.
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
            viewport={isDesktop ? { once: true, amount: 0.3 } : {}}
          >
            <h1 className={styles.heading}>
              I focus on product strategy and technical execution — defining and prioritizing
              roadmaps that align technical feasibility with business objectives, managing
              backlogs with data-driven prioritization (RICE/MoSCoW), and implementing solutions
              using Agile/Scrum methodologies that generate measurable ROI.
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
                  <strong>Product Expertise:</strong> Backlog Management, User Stories, Sprint Planning,
                  Product Discovery, OKRs, Prioritization (RICE/MoSCoW), Roadmap, UAT — with proven
                  results across B2B/B2C digital products and digital transformation projects.
                </li>
                <li>
                  <strong>Full-Stack Technical Skills:</strong> React.js, Drupal 7-10, MERN stack,
                  Laravel, Angular, Next.js, TypeScript, API REST, PostgreSQL, MongoDB, Figma, Git,
                  CI/CD — I technically challenge development teams while keeping business focus.
                </li>
                <li>
                  <strong>Business Acumen:</strong> 7 years B2B/B2C client relationships (360 vehicles sold,
                  14M€ revenue), stakeholder management, ROI analysis, complex negotiation — fluent in
                  5 languages (FR C2, RU C2, EN C1, UA C1, MD C1) for multicultural environments.
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
                    <strong>Measurable Business Impact:</strong> I build solutions that generate
                    ROI — from conversion optimization and lead generation to cart abandonment
                    reduction and user engagement improvements, always with clear KPIs.
                  </li>
                  <li>
                    <strong>Technical & Functional Bridge:</strong> My dual AMOA and technical
                    background allows me to transform complex business needs into technical solutions,
                    challenge dev teams with technical insight, and maintain business focus throughout.
                  </li>
                  <li>
                    <strong>Agile Product Leadership:</strong> I use Agile/Scrum/Kanban with tools
                    like Jira, Confluence, Figma, Google Analytics, and Miro to coordinate
                    cross-functional teams and deliver value iteratively.
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
