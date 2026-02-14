import styles from "../styles/Skills.module.css";

const skills = [
  {
    title: "Core",
    items: ["Java", "Spring Boot", "REST APIs", "MongoDB", "MySQL", "Git"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Cloud & Systems",
    items: [
      "AWS (EC2, Lambda, SQS/SNS)",
      "Kafka (Exposure)",
      "Docker (Basics)",
    ],
  },
  {
    title: "Tools",
    items: ["Postman", "GitHub", "VS Code", "Linux Basics"],
  },
  {
    title: "Languages",
    items: ["Java", "JavaScript", "Python", "C", "C++"],
  },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <p className={styles.subtitle}>
            A focused set of technologies I use to build production-ready
            systems.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.title} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{group.title}</h3>
                <span className={styles.badge}>Stack</span>
              </div>

              <div className={styles.chips}>
                {group.items.map((s) => (
                  <span key={s} className={styles.chip}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
