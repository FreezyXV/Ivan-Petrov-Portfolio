"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const name = "Ivan Petrov - ";
  const repeatedName = Array(30).fill(name).join("");

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const xPercent = useRef(0);
  const direction = useRef(-1);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction.current = e.direction * -1;
        },
      },
      x: "-500px",
    });

    const animate = () => {
      if (xPercent.current < -100) {
        xPercent.current = 0;
      } else if (xPercent.current > 0) {
        xPercent.current = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent.current });
      gsap.set(secondText.current, { xPercent: xPercent.current });
      requestAnimationFrame(animate);
      xPercent.current += 0.002 * direction.current;
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={styles.landing}>
      <div className={styles.firstDescription}>
        <p>
          Combining creativity, technical expertise, and a user-first approach
          to deliver exceptional results.
        </p>
      </div>
      <Image
        src="/images/Background/Middle Grey.png"
        fill={true}
        alt="background"
        className={styles.image}
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p className={styles.repeatedName} ref={firstText}>{repeatedName}</p>
          <p className={styles.repeatedName} ref={secondText}>{repeatedName}</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>
    </div>
  );
}
