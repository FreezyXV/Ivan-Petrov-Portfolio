import React, { useEffect, useRef } from "react";
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

    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, {
        top: "-25%",
        width: "150%",
        duration: 0.4,
        ease: "power3.in",
      })
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 });
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current.play();
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
        ></div>
      </div>
    </Magnetic>
  );
}
