"use client"
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingText = ['Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Open Source Contributor'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [rotatingText.length]);

  return (
    <section className={styles.homeSection} id="home">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.introText}>Hi, I'm <span className={styles.name}>Harsh Kumar Suryan</span></h1>
          <h2 className={styles.roleText}>
            <span className={styles.dynamicText}>{rotatingText[textIndex]}</span>
          </h2>
          <div className={styles.buttonsWrapper}>
            <a href="#projects" className={styles.primaryButton}>View My Work</a>
            <a href="#contact" className={styles.secondaryButton}>Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
