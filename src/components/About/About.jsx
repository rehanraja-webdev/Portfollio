import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <span className="section-tag">ABOUT ME</span>

      <h2>
        Turning Ideas Into <span>Interactive Experiences</span>
      </h2>

      <p className="about-intro">
        I'm Rehan Raja, a Computer Science student and aspiring Full Stack
        Developer passionate about building modern, responsive, and scalable web
        applications.
      </p>

      <div className="about-content">
        <div className="about-card">
          <h3>💻 Development</h3>
          <p>
            I specialize in building full-stack applications using React,
            Node.js, Express, and MongoDB. I enjoy creating clean user
            interfaces and designing secure backend systems.
          </p>
        </div>

        <div className="about-card">
          <h3>🚀 Learning Journey</h3>
          <p>
            Currently focused on mastering the MERN Stack, backend architecture,
            authentication systems, REST APIs, and industry-level project
            development.
          </p>
        </div>

        <div className="about-card">
          <h3>🎯 Goals</h3>
          <p>
            My goal is to become a skilled Software Engineer capable of building
            impactful products that solve real-world problems and deliver
            exceptional user experiences.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat">
          <h3>10+</h3>
          <span>Projects Built</span>
        </div>

        <div className="stat">
          <h3>4th Year</h3>
          <span>B.Tech CSE</span>
        </div>

        <div className="stat">
          <h3>MERN</h3>
          <span>Full Stack Developer</span>
        </div>
      </div>
    </section>
  );
};

export default About;
