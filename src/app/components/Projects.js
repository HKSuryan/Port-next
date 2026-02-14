import Image from "next/image";
import styles from "../styles/Projects.module.css";

const projectsData = [
  {
    title: "The Expense Diary",
    description:
      "Full-stack finance tracker using Spring Boot + React. Ingests transaction messages via webhook, extracts structured data, and stores it for analytics and reporting.",
    links: {
      code: "https://github.com/HKSuryan/The-Expense-Diary-Mark-1_Frontend-",
    },
    imageUrl: "/proimages/ExpenseDiary.png",
    tech: ["Spring Boot", "React", "MongoDB", "OpenAI", "Java"],
    featured: true,
  },
  {
    title: "Loyalty Plus",
    description:
      "E-commerce platform built with Spring Boot microservices, secure auth, order management, and Docker-based deployment on AWS.",
    links: {
      code: "https://github.com/HKSuryan/ECommerceProject_Frontend",
    },
    imageUrl: "/proimages/LoyaltyPlus.png",
    tech: ["Spring Boot", "Microservices", "SQL", "Docker", "AWS", "React"],
    featured: true,
  },
  {
    title: "NoticeBot",
    description:
      "Telegram bot that monitors college notices and notifies users by scraping and diff-checking updates reliably.",
    links: { code: "https://github.com/HKSuryan/Notice" },
    imageUrl: "/proimages/notice1.png",
    tech: ["Python", "BeautifulSoup", "Telegram", "MongoDB"],
    featured: true,
  },
  {
    title: "WeatherCity",
    description:
      "Weather app with city search, current conditions, and 7-day forecast with Firebase auth.",
    links: { code: "https://github.com/HKSuryan/WeatherCity" },
    imageUrl: "/proimages/weatherCity.png",
    tech: ["React", "Firebase", "MUI", "OpenWeather API"],
  },
  {
    title: "PizzaX",
    description:
      "MERN app with modern UI patterns and API-driven product flows.",
    links: { code: "https://github.com/HKSuryan/pizzaX" },
    imageUrl: "/proimages/pizza.png",
    tech: ["React", "Node.js", "MongoDB", "MUI"],
  },
  {
    title: "Lyrical",
    description:
      "Music search app using the iTunes API with a clean, responsive interface.",
    links: { code: "https://github.com/HKSuryan/Lyrical" },
    imageUrl: "/proimages/Lyrical.png",
    tech: ["React", "iTunes API", "MUI"],
  },
  {
    title: "Tetris",
    description:
      "Classic Tetris built with Pygame focusing on game loop, controls, and collision logic.",
    links: { code: "https://github.com/HKSuryan/Tetris" },
    imageUrl: "/proimages/tetris.png",
    tech: ["Python", "Pygame"],
  },
  {
    title: "Pacman",
    description:
      "Pac-Man built with Pygame using sprite-based movement and collisions.",
    links: { code: "https://github.com/HKSuryan/Pacman" },
    imageUrl: "/proimages/res.png",
    tech: ["Python", "Pygame"],
  },
];

export default function Projects() {
  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);

  const hero = featured[0];
  const side = featured.slice(1, 3);

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <p className={styles.subtitle}>
              Case-study style featured work — plus other builds and
              experiments.
            </p>
          </div>

          <a
            className={styles.githubBtn}
            href="https://github.com/HKSuryan"
            target="_blank"
            rel="noopener noreferrer">
            GitHub →
          </a>
        </div>

        {/* Featured */}
        <div className={styles.featuredLayout}>
          {hero && <HeroCard project={hero} />}
          <div className={styles.sideGrid}>
            {side.map((p) => (
              <MiniFeaturedCard key={p.title} project={p} />
            ))}
          </div>
        </div>

        {/* More */}
        <div className={styles.moreHeader}>
          <h3 className={styles.blockTitle}>More projects</h3>
          <span className={styles.miniHint}>
            Smaller builds and experiments
          </span>
        </div>

        <div className={styles.grid}>
          {others.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroCard({ project }) {
  return (
    <article className={styles.heroCard}>
      <div className={styles.heroMedia}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className={styles.heroImage}
          sizes="(max-width: 980px) 100vw, 700px"
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroGlow} />
      </div>

      <div className={styles.heroBody}>
        <div className={styles.heroTopRow}>
          <span className={styles.featuredBadge}>Featured</span>
          <span className={styles.heroTech}>
            {project.tech.slice(0, 3).join(" • ")}
          </span>
        </div>

        <h3 className={styles.heroTitle}>{project.title}</h3>
        <p className={styles.heroDesc}>{project.description}</p>

        <div className={styles.heroActions}>
          <a
            href={project.links.code}
            className={styles.heroPrimary}
            target="_blank"
            rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}

function MiniFeaturedCard({ project }) {
  return (
    <article className={styles.miniCard}>
      <div className={styles.miniThumb}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className={styles.miniImage}
          sizes="(max-width: 980px) 100vw, 520px"
        />
        <div className={styles.miniOverlay} />
      </div>

      <div className={styles.miniBody}>
        <h4 className={styles.miniTitle}>{project.title}</h4>
        <p className={styles.miniDesc}>{project.description}</p>
        <a
          href={project.links.code}
          className={styles.miniLink}
          target="_blank"
          rel="noopener noreferrer">
          View →
        </a>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 520px"
        />
      </div>

      <div className={styles.body}>
        <h4 className={styles.title}>{project.title}</h4>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.techRow}>
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            href={project.links.code}
            className={styles.primary}
            target="_blank"
            rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}
