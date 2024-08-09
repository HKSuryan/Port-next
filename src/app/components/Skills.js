import styles from '../styles/Skills.module.css';

// Assuming you have images in the public/images/skills directory
const skillsData = [
  { name: 'JavaScript', image: '/tsimages/js.gif' },
  { name: 'React', image: '/tsimages/react.png' },
  { name: 'Next.js', image: '/tsimages/next.jpeg' },
  { name: 'Node.js', image: '/tsimages/node.png' },
  { name: 'CSS', image: '/tsimages/css.png' },
  { name: 'HTML', image: '/tsimages/html.png' },
  { name: 'Git', image: '/tsimages/gitu.jpeg' },
  { name: 'MongoDB', image: '/tsimages/mongo.png' },
  { name: 'Java', image: '/tsimages/java.png' },
  { name: 'Postman', image: '/tsimages/postman.png' },
  { name: 'Python', image: '/tsimages/python.png' },
  { name: 'CPP', image: '/tsimages/cpp.png' },
  { name: 'C', image: '/tsimages/c.png' },
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
