import styles from '../styles/Skills.module.css';

// Assuming you have images in the public/images/skills directory
const skillsData = [
  { name: 'JavaScript', image: '/images/skills/javascript.png' },
  { name: 'React', image: '/images/skills/react.png' },
  { name: 'Next.js', image: '/images/skills/nextjs.png' },
  { name: 'Node.js', image: '/images/skills/nodejs.png' },
  { name: 'CSS', image: '/images/skills/css.png' },
  { name: 'HTML', image: '/images/skills/html.png' },
  { name: 'Git', image: '/images/skills/git.png' },
  { name: 'JavaScript', image: '/images/skills/javascript.png' },
  { name: 'React', image: '/images/skills/react.png' },
  { name: 'Next.js', image: '/images/skills/nextjs.png' },
  { name: 'Node.js', image: '/images/skills/nodejs.png' },
  { name: 'CSS', image: '/images/skills/css.png' },
  { name: 'HTML', image: '/images/skills/html.png' },
  { name: 'Git', image: '/images/skills/git.png' },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.subtitle}>
          Here are some of the technologies I am proficient in:
        </p>
        <div className={styles.skillsContent}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <img src={skill.image} alt={skill.name} className={styles.skillImage} />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
