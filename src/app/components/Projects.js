import styles from '../styles/Projects.module.css';

const projectsData = [

  {
    title:"Tetris",
    description:"Built with Pygame using Python. Created the game&aposs look&lsquo how it works&lsquo and how players interact with it. Learned problem-solving and attention to detail.",
    projectLink:"https://github.com/HKSuryan/Tetris",
    imageUrl:'proimages/tetris.png',
    techStack:"Python&lsquo Pygame"
},
{
    title:"Pacman",
    description:"Created a Pac-Man game in Python&lsquo spicing it up with awesome sprites. Deployed Pygame&aposs magic for handling graphics and movements.",
    projectLink:"https://github.com/HKSuryan/Pacman",
    imageUrl:'proimages/res.png',
    techStack:"Python&lsquo Pygame&lsquo Sprites"
}
,
{
    title:"Notice",
    description:"Check out NoticeBot a cool Telegram buddy I made with Python. It&aposs like a superhero that fetches the latest updates from our college website. I used web scraping tricks and the power of libraries like BeautifulSoup (bs4)&lsquo telegram.ext to make it happen.",
    projectLink:"https://github.com/HKSuryan/Notice",
    imageUrl:'proimages/notice1.png',
    techStack:"Python&lsquo BeautifulSoup&lsquo telegram.ext&lsquo requests"
}
,
{
    title:"PizzaX",
    description:"Presenting PizzaX dynamic web app cooked up with the MERN stack&lsquo this app not only satisfies tech cravings but also offers a delightful user experience.",
    projectLink:"https://github.com/HKSuryan/pizzaX",
    imageUrl:'proimages/pizza.png',
    techStack:"ReactJS&lsquo Javascript&lsquo MongoDB&lsquo NodeJS&lsquo HTML&lsquo CSS&lsquo MUI&lsquo axios"
}
,
{
    title:"Lyrical",
    description:"Introducing Lyrical a web-based app. This app connects to the iTunes API&lsquo letting users search for their favorite artists and get a list of their songs. With a sleek and user-friendly interface.",
    projectLink:"https://github.com/HKSuryan/Lyrical",
    imageUrl:'proimages/Lyrical.png',
    techStack:"ReactJS&lsquo itunesAPI&lsquo Javascript&lsquo MUI&lsquo axios"
},
];

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a href={project.projectLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
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
