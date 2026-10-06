import { useEffect, useRef } from "react";
import shreenidhiHero from "../assets/shreenidhi-hero.jpg";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const glow = glowRef.current;

    if (!hero || !image || !glow) return;

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;

      const moveX = (event.clientX - window.innerWidth / 2) * 0.012;
      const moveY = (event.clientY - window.innerHeight / 2) * 0.012;

      image.style.transform = `
        translate3d(${moveX}px, ${moveY}px, 0)
      `;
    };

    const handleMouseLeave = () => {
      image.style.transform = "translate3d(0, 0, 0)";
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Background */}
      <div className="hero-noise"></div>
      <div className="hero-glow" ref={glowRef}></div>
      <div className="hero-grid"></div>

      {/* Top Navigation Accent */}
      <div className="hero-top-line"></div>

      {/* Main Content */}
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <div className="hero-intro">
            <span className="intro-line"></span>
            <span>HI, I&apos;M SHREENIDHI</span>
          </div>

          <h1 className="hero-title">
            <span>I BUILD</span>

            <span className="gradient-word">
              DIGITAL
            </span>

            <span>
              EXPERIENCES
              <b>.</b>
            </span>
          </h1>

          <p className="hero-description">
            Frontend Developer crafting modern, interactive
            web experiences with
            <strong> React</strong>, <strong>AI</strong> and
            a touch of <strong>creativity</strong>.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-primary"
              onClick={() => scrollToSection("projects")}
            >
              <span>EXPLORE MY WORK</span>
              <span className="button-arrow">→</span>
            </button>

            <button
              className="hero-secondary"
              onClick={() => scrollToSection("contact")}
            >
              <span>LET&apos;S CONNECT</span>
              <span className="button-arrow">↗</span>
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">

          <div className="hero-circle"></div>

        <div className="hero-image-wrap">
  <img
    ref={imageRef}
    src={shreenidhiHero}
    alt="Shreenidhi"
    className="hero-image"
  />
</div>

          {/* Orbit */}
          <div className="hero-orbit">
            <span className="orbit-dot"></span>
          </div>

          {/* Floating Note */}
          <div className="hero-note">
            <span>Better</span>
            <span>Web</span>
            <span>Tomorrow</span>

            <div className="note-line"></div>
          </div>

          {/* Tech List */}
          <div className="hero-tech-list">
            <span>REACT</span>
            <span>JAVASCRIPT</span>
            <span>FIREBASE</span>
            <span>AI</span>
          </div>

        </div>
      </div>

      {/* Bottom Left */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <span>DOWN</span>

        <div className="scroll-track">
          <div className="scroll-dot"></div>
        </div>
      </div>

      {/* Bottom Right */}
      <div className="hero-bottom-label">
        <span></span>
        TURNING IDEAS INTO INTERACTIVE REALITIES
        <span></span>
      </div>
    </section>
  );
}

export default Hero;