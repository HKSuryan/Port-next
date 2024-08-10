import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.subtitle}>
          I&aposm always open to discussing new projects&lsquo creative ideas&lsquo or opportunities to be part of your visions.
        </p>
        <div className={styles.separ}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoItem}><strong>Email:</strong> hksuryan@gmail.com</p>
            <p className={styles.infoItem}><strong>Phone:</strong> +919355474729</p>
            <p className={styles.infoItem}><strong>Location:</strong> New Delhi, India</p>
          </div>
          <div className={styles.socialLinks}>
            <h3 className={styles.socialTitle}>Connect with Me</h3>
            <div className={styles.socialIcons}>
              <a href="https://github.com/HKSuryan" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink}`}>
                <img src="github-mark-white.png" alt="GitHub"  className={`${styles.socialIcon} ${styles.git}`}/>
              </a>
              <a href="https://www.linkedin.com/in/harsh-kumar-suryan-a9311a228/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src="linkedin.png" alt="LinkedIn" className={styles.socialIcon} />
              </a>
              <a href="https://x.com/HKSuryan" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src="x.png" alt="Twitter" id="x" className={`${styles.socialIcon} ${styles.x}`} />
              </a></div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
