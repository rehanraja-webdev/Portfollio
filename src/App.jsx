import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default App;
