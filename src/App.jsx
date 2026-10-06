import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import HowIWork from "./components/HowIWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <WhatIDo/>
      <Projects />
      <Journey/>
      <HowIWork/>
      <Contact/>
      <Footer/>


      <main>
        <section id="hero"></section>
      </main>
    </>
  );
}

export default App;