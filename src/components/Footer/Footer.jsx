import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Rehan Raza</h2>

        <p>
          Full Stack Developer passionate about building modern, scalable, and
          user-friendly web applications.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/rehanraja-webdev"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:yourmail@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Rehan Raza. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
