"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Rounded from "@/common/RoundedButton/RoundedButton";
import Project from "../Projects/components/project/ProjectSection";
import styles from "../Works/WorksSection.module.scss";

const projects = [
  {
    title: "Burger Town",
    src: "/images/BurgerTownWork.png",
    color: "#FFA500",
    url: "https://burger-house-front.vercel.app",
  },
  {
    title: "Hi Tech Store",
    src: "/images/HiTechStoreWork.png",
    color: "#E9EAEB",
    url: "https://hi-tech-store-front.vercel.app",
  },
  {
    title: "ELF.com",
    src: "/images/ELFLubricantsWork.png",
    color: "#000000",
    url: "https://elf.com/en",
  },
  {
    title: "TotalEnergies Lubricants",
    src: "/images/TotalEnergiesWork.png",
    color: "#db0000",
    url: "https://lubricants.totalenergies.com",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function WorksSection() {
  const router = useRouter();

  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;

  const [viewMode, setViewMode] = useState("list");

  const [isMobile, setIsMobile] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const xMoveContainer = useRef(null);
  const yMoveContainer = useRef(null);
  const xMoveCursor = useRef(null);
  const yMoveCursor = useRef(null);
  const xMoveCursorLabel = useRef(null);
  const yMoveCursorLabel = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) {
        setViewMode("grid");
        setIsMobile(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!modalContainer.current) return;

    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (mouseX, mouseY) => {
    if (
      !xMoveContainer.current ||
      !yMoveContainer.current ||
      !xMoveCursor.current ||
      !yMoveCursor.current ||
      !xMoveCursorLabel.current ||
      !yMoveCursorLabel.current
    ) {
      return;
    }
    xMoveContainer.current(mouseX);
    yMoveContainer.current(mouseY);
    xMoveCursor.current(mouseX);
    yMoveCursor.current(mouseY);
    xMoveCursorLabel.current(mouseX);
    yMoveCursorLabel.current(mouseY);
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });

    if (!isMobile) moveItems(e.clientX, e.clientY);
  };

  const manageModal = (newActive, newIndex, mouseX, mouseY) => {
    if (!isMobile) {
      moveItems(mouseX, mouseY);
      setModal({ active: newActive, index: newIndex });
    }
  };

  return (
    <section className={styles.mainWorks}>
      <div
        ref={containerRef}
        className={styles.myProjects}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
      >
        {/* Desktop Container / Heading */}
        <div className={`${styles.container} medium`}>
          <div className={styles.row}>
            <div className={`${styles.flexCol} once-in`}>
              <h1 className={styles.mainHeading}>
                <span>Creating next level digital products </span>
                <span>
                  <Image
                    src="/images/BlueCube.gif"
                    alt="Blue Cube"
                    width={150}
                    height={150}
                    style={{ objectFit: "contain", verticalAlign: "middle" }}
                    className={styles.blueCube}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop Toggle Buttons (hidden on mobile via CSS) */}
        <div className={styles.toggleButtons}>
          <button
            onClick={() => setViewMode("list")}
            className={`${styles.toggleButton} ${
              viewMode === "list" ? styles.activeBtn : ""
            }`}
            aria-label="Switch to list view"
          >
            <Image
              src={
                viewMode === "list"
                  ? "/images/ListBlack.png"
                  : "/images/ListWhite.png"
              }
              alt="List Icon"
              width={25}
              height={25}
              className={styles.btnImageList}
            />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`${styles.toggleButton} ${
              viewMode === "grid" ? styles.activeBtn : ""
            }`}
            aria-label="Switch to grid view"
          >
            <Image
              src={
                viewMode === "grid"
                  ? "/images/GridBlack.png"
                  : "/images/GridWhite.png"
              }
              alt="Grid Icon"
              width={25}
              height={25}
              className={styles.btnImageGrid}
            />
          </button>
        </div>

        <div className={styles.projectAndButton}>
          {/* Project Items */}
          <div
            className={`${styles.body} ${
              viewMode === "grid" ? styles.grid : styles.list
            }`}
          >
            {projects.map((proj, i) => {
              // If mobile: direct link, no modal
              if (isMobile) {
                return (
                  <Link
                    key={i}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectItem}
                  >
                    <motion.div
                      className={styles.gridImageWrapper}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Image
                        src={proj.src}
                        width={500}
                        height={300}
                        alt={proj.title}
                        className={styles.gridImage}
                      />
                    </motion.div>
                    <p className={styles.projectTitle}>{proj.title}</p>
                  </Link>
                );
              } else {
                return (
                  <div key={i} className={styles.projectItem}>
                    {viewMode === "grid" ? (
                      <>
                        <motion.div
                          className={styles.gridImageWrapper}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          onMouseEnter={() =>
                            manageModal(true, i, mousePos.x, mousePos.y)
                          }
                          onMouseLeave={() =>
                            manageModal(false, i, mousePos.x, mousePos.y)
                          }
                        >
                          <Image
                            src={proj.src}
                            width={500}
                            height={300}
                            alt={proj.title}
                            className={styles.gridImage}
                          />
                        </motion.div>
                        <p className={styles.projectTitle}>{proj.title}</p>
                      </>
                    ) : (
                      <Project
                        index={i}
                        title={proj.title}
                        manageModal={manageModal}
                      />
                    )}
                  </div>
                );
              }
            })}
          </div>

          {/* "Let's Work Together" Button */}
          <div className={styles.buttonDiv}>
            <Rounded onClick={() => router.push("/contact")}>
              <p>Let’s Work Together</p>
            </Rounded>
          </div>
        </div>

        {/* Modal / Cursor - Desktop Only */}
        {!isMobile && (
          <>
            {/* Modal */}
            <motion.div
              ref={modalContainer}
              variants={scaleAnimation}
              initial="initial"
              animate={active ? "enter" : "closed"}
              className={`${styles.modalContainer} ${
                active ? styles.modalActive : ""
              }`}
              aria-hidden={!active}
            >
              <div
                style={{ top: `${index * -100}%` }}
                className={styles.modalSlider}
              >
                {projects.map((p, i) => (
                  <Link
                    key={`modal_${i}`}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalLink}
                    aria-label={`View ${p.title}`}
                  >
                    <motion.div
                      className={styles.modal}
                      style={{ backgroundColor: p.color }}
                    >
                      <Image
                        src={p.src}
                        width={300}
                        height={200}
                        alt={p.title}
                        className={styles.modalImage}
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Custom Cursor */}
            <motion.div
              ref={cursor}
              className={styles.cursor}
              variants={scaleAnimation}
              initial="initial"
              animate={active ? "enter" : "closed"}
              aria-hidden="true"
            />
            <motion.div
              ref={cursorLabel}
              className={styles.cursorLabel}
              variants={scaleAnimation}
              initial="initial"
              animate={active ? "enter" : "closed"}
              aria-hidden="true"
            >
              View
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
