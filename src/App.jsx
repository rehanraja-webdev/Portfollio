import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
