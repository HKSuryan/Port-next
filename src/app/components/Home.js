"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const rotatingText = useMemo(
    () => [
      "Backend-first Full-Stack Engineer",
      "Spring Boot • AWS • MongoDB",
      "Clean APIs. Reliable systems.",
      "Problem solver with 500+ DSA questions",
    ],
    [],
  );

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingText.length);
    }, 2200);
    return () => clearInterval(id);
  }, [rotatingText.length]);

  return (
    <section className={styles.homeSection} id="home">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <p className={styles.kicker}>
            Software Engineer • Backend / Full-Stack
          </p>

          <h1 className={styles.headline}>
            Hi, I’m <span className={styles.name}>Harsh Kumar Suryan</span>
          </h1>

          <p className={styles.subheadline}>
            I build scalable Spring Boot services and clean web experiences —
            focused on performance, maintainability, and real-world impact.
          </p>

          <div className={styles.rotator} aria-live="polite">
            <span className={styles.rotatorLabel}>Currently:</span>
            <span key={textIndex} className={styles.rotatingText}>
              {rotatingText[textIndex]}
            </span>
          </div>

          <div className={styles.buttonsWrapper}>
            <a href="#projects" className={styles.primaryButton}>
              View Case Studies
            </a>
            <a
              href="/Harsh-Kumar-Suryan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}>
              Download Resume
            </a>
            <a href="#contact" className={styles.ghostButton}>
              Contact
            </a>
          </div>

          <div className={styles.quickStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>DSA problems</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>Spring Boot</span>
              <span className={styles.statLabel}>backend focus</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>AWS</span>
              <span className={styles.statLabel}>cloud exposure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
