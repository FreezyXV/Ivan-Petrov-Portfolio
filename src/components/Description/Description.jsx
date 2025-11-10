import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton/RoundedButton";

export default function Description() {
  const phrase =
    "I build digital products the same way I built high-performing sales organizations: start from customer pain, align every stakeholder, and execute fast. Former automotive B2B/B2C sales lead turned Technical Product Specialist, I translate quota-carrying insight into full-stack delivery.";
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
          UX optimization and conversion funnel improvements. That mix of sales
          leadership and hands-on engineering lets me coach revenue, marketing,
          and product teams around the same metrics while I ship the solution.
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
