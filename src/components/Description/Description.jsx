import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton/RoundedButton";

export default function Description() {
  const phrase =
    "Solutions Consultant with 7+ years bridging commercial performance and digital transformation. I act as the convergence point between business teams, IT, and clients — combining proven B2B/B2C expertise (Mercedes-Benz: €14M revenue) with AMOA and full-stack skills (TotalEnergies: 98 user stories, +26% leads, -35% form abandonment) to deliver solutions with measurable ROI.";
  const description = useRef(null);
  const isInView = useInView(description);
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/about");
  };

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          TotalEnergies results (2024-2025): 98 user stories delivered with 95% UAT acceptance,
          108 web pages created and optimized, -35% cart abandonment, +40% form completions,
          +26% incoming leads. My dual AMOA and technical background transforms complex business needs
          into solutions that generate measurable ROI.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button} onClick={handleNavigate}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
