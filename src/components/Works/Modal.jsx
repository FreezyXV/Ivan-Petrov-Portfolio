"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Modal.module.scss";

export default function Modal({ tech, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <motion.div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <Image
          src={tech.icon}
          alt={tech.name}
          width={100}
          height={100}
          className={styles.modalImage}
        />
        <h2>{tech.name}</h2>
        <p>{tech.description}</p>
      </motion.div>
    </div>
  );
}
