import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Labs from "./components/Labs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <About />
        <Skills />
        <Projects />
        <Labs />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
