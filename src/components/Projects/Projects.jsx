import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GameZone from "../../assets/GameZone.png";
import inknotes from "../../assets/inknotes.png";
import TeamTask from "../../assets/TeamTask.png";

const projects = [
  {
    title: "Notes App",
    description:
      "A full-stack note management application featuring secure authentication, CRUD operations, and responsive design.",
    image: inknotes,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/rehanraja-webdev/Notes-App",
    live: "https://inknotes.netlify.app/",
  },

  {
    title: "TeamTask",
    description:
      "A project management platform with authentication, RBAC, task assignment, and team collaboration. Note: Project is ongoing.",
    image: TeamTask,
    tech: ["React", "Express", "MongoDB", "JWT", "Node.js", "Tailwind"],
    github: "https://github.com/rehanraja-webdev/team-task-manager",
    live: "",
  },

  {
    title: "GameZone",
    description:
      "Modern mini GameZone featuring multiple web games based on different login with clean UI and Responsive for all types devices.",
    image: GameZone,
    tech: ["React", "CSS", "Router"],
    github: "https://github.com/rehanraja-webdev/Game-Zone",
    live: "https://mini-gamezone.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <span className="section-tag">MY WORK</span>

      <h2>
        Featured <span>Projects</span>
      </h2>

      <p className="projects-description">
        Some of the projects I've built while learning and applying modern
        full-stack development practices.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt="" />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_Blank">
                  <FaGithub />
                  GitHub
                </a>

                <a href={project.live} target="_Blank">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
