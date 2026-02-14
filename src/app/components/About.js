import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>About</h2>
          {/* <p className={styles.subtitle}>
            Backend-first full-stack engineer focused on building reliable
            systems and clean user experiences.
          </p> */}
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageRing}>
              <Image
                src="/pic.JPG"
                alt="Harsh Kumar Suryan"
                width={320}
                height={320}
                className={styles.profileImage}
                priority
              />
            </div>

            {/* <div className={styles.quickLinks}>
              <a className={styles.linkPill} href="mailto:hksuryan@gmail.com">
                Email
              </a>
            </div> */}
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.aboutText}>
              I’m <strong>Harsh Kumar Suryan</strong> — a software engineer who
              enjoys building backend services and full-stack products that are{" "}
              <strong>scalable</strong>, <strong>secure</strong>, and easy to
              maintain. I work primarily with{" "}
              <strong>Java / Spring Boot</strong>, databases like{" "}
              <strong>MongoDB/MySQL</strong>, and modern web stacks.
            </p>

            <p className={styles.aboutText}>
              I care a lot about clean APIs, good architecture, and turning
              vague requirements into reliable features. Outside work, I
              recharge with chess and small experiments (yes, including
              smoothies).
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlightCard}>
                <p className={styles.highlightTitle}>Backend</p>
                <p className={styles.highlightText}>
                  Spring Boot, REST APIs, Security, Microservices
                </p>
              </div>
              <div className={styles.highlightCard}>
                <p className={styles.highlightTitle}>Data</p>
                <p className={styles.highlightText}>
                  MongoDB, MySQL, schema & indexing basics
                </p>
              </div>
              <div className={styles.highlightCard}>
                <p className={styles.highlightTitle}>Cloud</p>
                <p className={styles.highlightText}>
                  AWS (EC2, Lambda, SQS/SNS), Kafka exposure
                </p>
              </div>
              <div className={styles.highlightCard}>
                <p className={styles.highlightTitle}>Problem Solving</p>
                <p className={styles.highlightText}>
                  500+ DSA questions, strong debugging mindset
                </p>
              </div>
            </div>

            {/* <div className={styles.ctaRow}>
              <a className={styles.primaryCta} href="#projects">
                View Case Studies
              </a>
              <a
                className={styles.secondaryCta}
                href="/Harsh-Kumar-Suryan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer">
                Download Resume
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
