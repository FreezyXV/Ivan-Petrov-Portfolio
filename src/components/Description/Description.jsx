import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton/RoundedButton";

export default function Description() {
  const phrase =
    "Business Analyst working at the interface between business teams and IT. I turn ambiguous business needs into actionable specifications: discovery workshops, user stories with acceptance criteria, process mapping, backlog prioritisation, UAT plans and change management. A premium B2B/B2C sales background (€14M revenue) keeps me anchored on business value, and full-stack training lets me challenge technical feasibility without unnecessary back-and-forth.";
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
          TotalEnergies (2024–2025): 98 user stories delivered, 95% UAT acceptance, 108 web pages,
          45+ business/IT workshops, 5 teams coordinated. Measured impact: -35% form abandonment,
          +40% completions, +26% incoming leads.
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
