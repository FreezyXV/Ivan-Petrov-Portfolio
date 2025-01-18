"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Rounded from "../../common/RoundedButton/RoundedButton";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../../common/Magnetic/Magnetic";
import styles from "./style.module.scss";

export default function Footer() {
  const container = useRef(null);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  const handleNavigate = () => {
    router.push("/contact");
  };

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image
                fill={true}
                alt="Work together image"
                src="/images/IMG_7197.JPG"
              />
            </div>
            <h2>Let's work</h2>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded
              onClick={handleNavigate}
              backgroundColor="#334BD3"
              className={styles.button}
            >
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>ivanxpetrov.dev@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+33 6 19 05 42 04</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Location</h3>
              <p>Paris</p>
            </span>
          </div>
          <div>
            <span>
              <h3>Socials</h3>
              <Magnetic>
                <p>Commet</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Instagram</p>
            </Magnetic>
            <Magnetic>
              <p>Malt</p>
            </Magnetic>
            <Magnetic>
              <p>LinkedIn</p>
            </Magnetic>
            <Magnetic>
              <p>Little Big Connection</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
