import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Coding from "./sections/Coding";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f7f5ef] text-neutral-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Coding />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
