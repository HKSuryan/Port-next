import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src="/path/to/your-image.jpg" alt="Your Name" className={styles.profileImage} />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.aboutText}>
              Hi, I'm [Your Name], a passionate software developer with a strong background in [Your Expertise]. 
              I have a deep love for creating intuitive and responsive web applications. 
              With [X] years of experience in the industry, I have worked on various projects ranging from 
              [Brief description of types of projects you've worked on]. I enjoy solving complex problems and am always 
              eager to learn new technologies and improve my skills.
            </p>
            <p className={styles.aboutText}>
              When I'm not coding, you can find me [Your Hobbies or Interests]. I'm always open to exciting new opportunities, 
              so feel free to get in touch if you'd like to work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
