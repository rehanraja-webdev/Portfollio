import "./Hero.css";
import profile from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="intro">
          <h1>Rehan Raja</h1>

          <h3>Building Modern Web Experiences with the MERN Stack</h3>
          <div className="btn-container">
            <button className="view-btn">View Projects</button>
            <button className="download-btn">Download CV</button>
          </div>

          <ul>
            <li>Mern Stack Developer</li>
            <li>B.Tech Computer Science</li>
            <li>Open for Internship and Opportunity</li>
          </ul>
        </div>

        <div className="right-hero">
          <div className="img-container">
            <img src={profile} alt="Rehan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
