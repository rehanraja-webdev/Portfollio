import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiMongoose, SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <span className="section-tag">MY SKILLS</span>

      <h2>
        Technologies I <span>Work With</span>
      </h2>

      <p className="skills-description">
        I enjoy building modern web applications and continuously expanding my
        technical expertise. Here are the technologies and tools I use
        throughout my development journey.
      </p>

      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 />
          <span>HTML5</span>
        </div>

        <div className="skill-card">
          <FaCss3Alt />
          <span>CSS3</span>
        </div>

        <div className="skill-card">
          <FaJs />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <FaJava />
          <span>Java</span>
        </div>

        <div className="skill-card">
          <FaReact />
          <span>React</span>
        </div>

        <div className="skill-card">
          <FaNodeJs />
          <span>Node.js</span>
        </div>

        <div className="skill-card">
          <SiExpress />
          <span>Express.js</span>
        </div>

        <div className="skill-card">
          <SiMongodb />
          <span>MongoDB</span>
        </div>

        <div className="skill-card">
          <SiMongoose />
          <span>Mongoose</span>
        </div>

        <div className="skill-card">
          <FaGitAlt />
          <span>Git</span>
        </div>

        <div className="skill-card">
          <FaGithub />
          <span>GitHub</span>
        </div>

        <div className="skill-card">
          <SiPostman />
          <span>Postman</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
