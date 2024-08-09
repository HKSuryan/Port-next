import styles from '../styles/Experience.module.css';

const experiencesData = [
  {
    title: 'Web Developer Intern',
    company: 'IIT Academy',
    duration: 'May 2024 - Jul 2024',
    description: 'Designed and developed a fully responsive web application from scratch using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented dynamic and interactive tables using React-tables. Utilized Tailwind CSS for rapid and flexible styling, ensuring a modern and user-friendly interface.',
  },
  {
    title: 'Trainee',
    company: 'Brain Mentors',
    duration: 'Jul 2023 - Aug 2023',
    description: 'Completed intensive training in MERN (MongoDB, Express.js, React, Node.js) stack, Applied acquired skills to successfully complete a project. Demonstrating practical understanding of web development principles and hands-on experience in creating dynamic, responsive applications.',
  },
  {
    title: 'Intern',
    company: 'Edunet Foundation',
    duration: 'Jun 2023 - Jul 2023',
    description: 'Interned in Artificial Intelligence using IBM SkillsBuild under AICTE. Gaining practical experience in applying AI concepts and technologies.',
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
