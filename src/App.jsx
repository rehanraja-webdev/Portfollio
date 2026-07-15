import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
