import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Want to build something great together?
          </h2>

          <p className={styles.subtitle}>
            Reach out for full-time roles, internships, freelance work, or
            collaboration. I usually reply within 24 hours.
          </p>

          <div className={styles.ctaRow}>
            <a
              className={styles.primaryCta}
              href="mailto:hksuryan@gmail.com"
              aria-label="Email Harsh Kumar Suryan">
              Email Me
            </a>

            <a
              className={styles.secondaryCta}
              href="https://www.linkedin.com/in/harsh-kumar-suryan-a9311a228/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile">
              LinkedIn
            </a>

            <a
              className={styles.ghostCta}
              href="/Harsh-Kumar-Suryan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume PDF">
              Resume
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Contact card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Contact</h3>

            <div className={styles.item}>
              <span className={styles.label}>Email</span>
              <a className={styles.valueLink} href="mailto:hksuryan@gmail.com">
                hksuryan@gmail.com
              </a>
            </div>

            <div className={styles.item}>
              <span className={styles.label}>Phone</span>
              <span className={styles.value}>Available on request</span>
            </div>

            <div className={styles.item}>
              <span className={styles.label}>Location</span>
              <span className={styles.value}>New Delhi, India</span>
            </div>
          </div>

          {/* Social card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Online</h3>

            <div className={styles.socialRow}>
              <a
                href="https://github.com/HKSuryan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Open GitHub profile">
                <span className={styles.iconWrap}>
                  <img
                    src="/github-mark-white.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.socialIcon}
                  />
                </span>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/harsh-kumar-suryan-a9311a228/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Open LinkedIn profile">
                <span className={styles.iconWrap}>
                  <img
                    src="/linkedin.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.socialIcon}
                  />
                </span>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://x.com/HKSuryan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Open X profile">
                <span className={styles.iconWrap}>
                  <img
                    src="/x.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.socialIcon}
                  />
                </span>
                <span>X</span>
              </a>
            </div>

            <p className={styles.note}>
              Prefer email for opportunities. For quick messages, LinkedIn works
              best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
