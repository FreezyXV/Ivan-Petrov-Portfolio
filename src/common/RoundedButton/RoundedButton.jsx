"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Magnetic from "../Magnetic/Magnetic";
import styles from "./style.module.scss";

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) {
  const circle = useRef(null);
  const timeline = useRef(null);
  const timeoutId = useRef(null);

  useEffect(() => {
    if (!circle.current) return;

    timeline.current = gsap
      .timeline({ paused: true })
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeline.current?.kill();
    };
  }, []);

  const manageMouseEnter = () => {
    if (!timeline.current) return;
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    if (!timeline.current) return;
    timeoutId.current = window.setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        />
      </div>
    </Magnetic>
  );
}
