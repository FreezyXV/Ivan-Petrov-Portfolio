import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton/RoundedButton";

export default function Description() {
  const phrase =
    "I transform business challenges into high-performing digital solutions. With 7+ years in client-facing roles and full-stack expertise, I combine product strategy, stakeholder management, and hands-on development to deliver measurable ROI.";
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
          Recent achievement: +72% qualified leads for TotalEnergies through
          UX optimization and conversion funnel improvements. I bridge the gap
          between technical teams and business stakeholders to drive real impact.
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
