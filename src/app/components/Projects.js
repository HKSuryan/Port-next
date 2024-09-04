import styles from "../styles/Projects.module.css";

const projectsData = [
  {
    title: "Tetris",
    description:
      "Built with Pygame using Python. Created the game's look, how it works, and how players interact with it. Learned problem-solving and attention to detail.",
    projectLink: "https://github.com/HKSuryan/Tetris",
    imageUrl: "proimages/tetris.png",
    techStack: "Python, Pygame",
  },
  {
    title: "Pacman",
    description:
      "Crafted a Pac-Man game in Python, spicing it up with awesome sprites. Deployed Pygame's magic for handling graphics and movements.",
    projectLink: "https://github.com/HKSuryan/Pacman",
    imageUrl: "proimages/res.png",
    techStack: "Python, Pygame, Sprites",
  },
  {
    title: "Notice",
    description:
      "'NoticeBot' a cool Telegram buddy that fetches the latest updates from our college website. I used web scraping tricks and the power of libraries like BeautifulSoup (bs4),telegram.ext to make it happen.",
    projectLink: "https://github.com/HKSuryan/Notice",
    imageUrl: "proimages/notice1.png",
    techStack: "Python, BeautifulSoup, telegram.ext, requests",
  },
  {
    title: "PizzaX",
    description:
      "Presenting PizzaX dynamic web app cooked up with the MERN stack, this app not only satisfies tech cravings but also offers a delightful user experience.",
    projectLink: "https://github.com/HKSuryan/pizzaX",
    imageUrl: "proimages/pizza.png",
    techStack: "ReactJS, Javascript, MongoDB, NodeJS, HTML, CSS, MUI, axios",
  },
  {
    title: "Lyrical",
    description:
      "Introducing Lyrical a web-based app. This app connects to the iTunes API, letting users search for their favorite artists and get a list of their songs. With a sleek and user-friendly interface.",
    projectLink: "https://github.com/HKSuryan/Lyrical",
    imageUrl: "proimages/Lyrical.png",
    techStack: "ReactJS, itunesAPI, Javascript, MUI, axios",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.projectLink}
                className={styles.projectLink}
                target="_blank"
                rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
