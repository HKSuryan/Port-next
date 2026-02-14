import styles from "../styles/FooterSection.module.css";

const FooterSection = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <p className={styles.mainLine}>
          © {new Date().getFullYear()} Harsh Kumar Suryan
        </p>

        <p className={styles.subLine}>
          Built with Next.js • Designed with precision
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
