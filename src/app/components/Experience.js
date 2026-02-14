import styles from "../styles/Experience.module.css";

const experiencesData = [
  {
    title: "Software Engineer",
    company: "Encora",
    duration: "Aug 2025 — Present",
    location: "India",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "AWS",
      "Microservices",
      "Kafka",
    ],
    bullets: [
      "Strengthening backend engineering fundamentals through enterprise-grade training in OOP, design patterns, multithreading, and collections.",
      "Building and reviewing Spring Boot services with focus on clean architecture and security (Spring Security).",
      "Hands-on exposure to microservices workflows and AWS components (EC2, Lambda, SQS, SNS) with Kafka-based event flows.",
    ],
  },
  {
    title: "SDE Intern",
    company: "Amrapali Steels Pvt. Ltd.",
    duration: "Jan 2025 — Apr 2025",
    location: "India",
    tags: ["Spring Boot", "MongoDB", "Telegram Bot API"],
    bullets: [
      "Built an Order Management System using Spring Boot + MongoDB integrated with Telegram Bot API for sales/admin order flows.",
      "Streamlined order capture and tracking, improving operational clarity with faster request handling.",
      "Designed robust data flow for creation, validation, and exports to support daily operations.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "IIT Academy",
    duration: "May 2024 — Jul 2024",
    location: "India",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    bullets: [
      "Developed a responsive MERN web app from scratch with reusable components.",
      "Implemented dynamic, interactive tables using react-table for better data exploration.",
      "Shipped consistent UI quickly using Tailwind CSS across screen sizes.",
    ],
  },
  {
    title: "Trainee (MERN)",
    company: "Brain Mentors",
    duration: "Jul 2023 — Aug 2023",
    location: "India",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    bullets: [
      "Completed intensive MERN training with focus on practical development and debugging.",
      "Built a project applying routing, APIs, and database integration fundamentals.",
    ],
  },
  {
    title: "AI Intern (IBM SkillsBuild via AICTE)",
    company: "Edunet Foundation",
    duration: "Jun 2023 — Jul 2023",
    location: "India",
    tags: ["AI", "IBM SkillsBuild"],
    bullets: [
      "Worked on foundational AI concepts through structured modules and guided tasks.",
      "Explored practical AI workflows and problem framing.",
    ],
  },
];

const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <p className={styles.subtitle}>
            A timeline of roles where I built systems, shipped features, and
            improved workflows.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiencesData.map((exp) => (
            <article
              key={`${exp.company}-${exp.title}`}
              className={styles.item}>
              <div className={styles.rail} aria-hidden="true">
                <span className={styles.dot} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.left}>
                    <h3 className={styles.role}>{exp.title}</h3>
                    <p className={styles.meta}>
                      <span className={styles.company}>{exp.company}</span>
                      {exp.location ? (
                        <span className={styles.sep}> • </span>
                      ) : null}
                      {exp.location ? (
                        <span className={styles.location}>{exp.location}</span>
                      ) : null}
                    </p>
                  </div>

                  <span className={styles.duration}>{exp.duration}</span>
                </div>

                {exp.tags?.length ? (
                  <div className={styles.tags}>
                    {exp.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <ul className={styles.bullets}>
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
