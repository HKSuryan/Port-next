import styles from '../styles/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.sectionWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Section;
