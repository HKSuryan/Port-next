import styles from '../styles/FooterSection.module.css';

const FooterSection = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Harsh Kumar Suryan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
