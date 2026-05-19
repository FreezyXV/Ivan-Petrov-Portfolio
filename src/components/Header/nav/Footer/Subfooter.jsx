import styles from './style.module.scss';

export default function Subfooter() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/FreezyXV" target="_blank" rel="noopener noreferrer">Github</a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://www.linkedin.com/in/ivan-petrov-dev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  )
}
