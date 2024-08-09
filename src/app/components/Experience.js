import styles from '../styles/Experience.module.css';

const experiencesData = [
  {
    title: 'Software Engineer',
    company: 'Tech Company A',
    duration: 'Jan 2020 - Present',
    description: 'Developed and maintained web applications using React and Node.js. Worked on improving the performance and scalability of existing systems.',
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Agency B',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Designed and implemented responsive user interfaces for various clients using HTML, CSS, and JavaScript. Collaborated closely with designers and backend developers.',
  },
  {
    title: 'Junior Developer',
    company: 'Startup C',
    duration: 'Jul 2016 - May 2018',
    description: 'Assisted in the development of a new e-commerce platform, focusing on frontend components and user experience enhancements.',
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.timeline}>
        {experiencesData.map((experience, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3 className={styles.experienceTitle}>{experience.title}</h3>
              <h4 className={styles.experienceCompany}>{experience.company}</h4>
              <p className={styles.experienceDuration}>{experience.duration}</p>
              <p className={styles.experienceDescription}>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
