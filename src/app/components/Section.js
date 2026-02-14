import styles from "../styles/Section.module.css";

const Section = ({ id, title, subtitle, variant = "default", children }) => {
  return (
    <section
      className={`${styles.sectionWrapper} ${styles[variant] || ""}`}
      id={id}>
      <div className={styles.container}>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}

        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
