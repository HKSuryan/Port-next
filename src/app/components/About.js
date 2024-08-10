import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src="/pic.jpg" alt="Your Name" className={styles.profileImage} />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.aboutText}>
              Hi&lsquo I&aposm Harsh Kumar Suryan&lsquo a passionate fellow with a strong background in software development&lsquo with experience in both front-end and back-end technologies.
              I have a deep love for creating intuitive and responsive web applications. 
               I enjoy solving complex problems and am always 
              eager to learn new technologies and improve my skills.
            </p>
            <p className={styles.aboutText}>
              When I&aposm not coding&lsquo you&aposll find me making smoothies or challenging friends to a game of chess. I&aposm always open to exciting new opportunities&lsquo 
              so feel free to get in touch if you&aposd like to work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
