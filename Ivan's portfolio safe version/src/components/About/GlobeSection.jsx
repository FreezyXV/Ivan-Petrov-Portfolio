"use client";
import styles from "./globe.module.scss"; 

export default function GlobeSection() {
  return (
    <section
      className={styles.globeSection}
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        transform: "translate(0, 0)",
      }}
    >
      <div className={`${styles.container} ${styles.medium}`}>
        <div className={styles.row}>
          <div className={styles.flexCol}>
            <div className={styles.stripe}></div>
            <div className={styles.digitalBall}>
              <div className={styles.overlay}></div>
              <div className={styles.globe}>
                <div className={styles.globeWrap}>
                  <div className={styles.circle}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.circleHor}></div>
                  <div className={styles.circleHorMiddle}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
