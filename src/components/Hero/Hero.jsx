import "./Hero.css";
import profile from "../../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-section">
        <div className="intro">
          <p className="hero-greeting">👋 Hello, I'm</p>

          <h1>
            Rehan <span>Raja</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build modern, scalable, and responsive web applications using
            React, Node.js, Express, and MongoDB. Passionate about transforming
            ideas into impactful digital experiences and continuously improving
            my development skills.
          </p>

          <div className="btn-container">
            <a className="view-btn" href="#projects">
              View Projects
            </a>
            <button className="download-btn">Download Resume</button>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/rehanraja-webdev"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/rehan-raja-devs"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:rehanraja.dev@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="right-hero">
          <div className="img-container">
            <img src={profile} alt="Rehan Raza" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
