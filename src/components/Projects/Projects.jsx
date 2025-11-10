"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Rounded from "@/common/RoundedButton/RoundedButton";
import Project from "./components/project/ProjectSection";
import styles from "./style.module.scss";

import { PROJECTS } from "@/data/projects";
import { modalScaleAnimation } from "@/constants/animations";
import useProjectShowcase from "@/hooks/useProjectShowcase";

export default function Projects() {
  const router = useRouter();
  const {
    modal,
    viewMode,
    setViewMode,
    isMobile,
    containerRef,
    modalContainer,
    cursor,
    cursorLabel,
    handleMouseMove,
    manageModal,
  } = useProjectShowcase();
  const { active, index } = modal;

  return (
    <section className={styles.mainWorks}>
      <div
        ref={containerRef}
        className={styles.myProjects}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
      >
        <div className={`${styles.container} medium`}>
          <div className={styles.row}>
            <div className={`${styles.flexCol} once-in`}>
              <h1 className={styles.mainHeading}>
                <span>Delivering product solutions </span>
                <span>
                  that drive business impact{" "}
                  <Image
                    src="/images/BlueCube.gif"
                    alt="Blue Cube"
                    width={150}
                    height={150}
                    style={{ objectFit: "contain", verticalAlign: "middle" }}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>

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
          <div
            className={`${styles.body} ${
              viewMode === "grid" ? styles.grid : styles.list
            }`}
          >
            {PROJECTS.map((proj, i) => {
              if (isMobile) {
                return (
                  <Link
                    key={proj.title}
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
              }

              return (
                <div key={proj.title} className={styles.projectItem}>
                  {viewMode === "grid" ? (
                    <>
                      <motion.div
                        className={styles.gridImageWrapper}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onMouseEnter={(e) =>
                          manageModal(true, i, e.clientX, e.clientY)
                        }
                        onMouseLeave={(e) =>
                          manageModal(false, i, e.clientX, e.clientY)
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
                    <Project index={i} title={proj.title} manageModal={manageModal} />
                  )}
                </div>
              );
            })}
          </div>

          <div className={styles.buttonDiv}>
            <Rounded onClick={() => router.push("/contact")}>
              <p>Let’s Work Together</p>
            </Rounded>
          </div>
        </div>

        {!isMobile && (
          <>
            <motion.div
              ref={modalContainer}
              variants={modalScaleAnimation}
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
                {PROJECTS.map((p) => (
                  <Link
                    key={`modal_${p.title}`}
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

            <motion.div
              ref={cursor}
              className={styles.cursor}
              variants={modalScaleAnimation}
              initial="initial"
              animate={active ? "enter" : "closed"}
              aria-hidden="true"
            />
            <motion.div
              ref={cursorLabel}
              className={styles.cursorLabel}
              variants={modalScaleAnimation}
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
