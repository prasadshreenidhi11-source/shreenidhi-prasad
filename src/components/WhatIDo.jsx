import { useEffect, useRef } from "react";
import "./WhatIDo.css";

function WhatIDo() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  const services = [
    {
      number: "01",
      title: ["FRONTEND", "DEVELOPMENT"],
      description:
        "Building modern, responsive interfaces with React, JavaScript and thoughtful UI details that make websites feel fast, clean and intuitive.",
      tags: ["REACT", "JAVASCRIPT", "UI", "RESPONSIVE"],
    },
    {
      number: "02",
      title: ["CREATIVE WEB", "EXPERIENCES"],
      description:
        "Creating interactive digital experiences with motion, smooth transitions and visual details that turn ordinary websites into memorable experiences.",
      tags: ["MOTION", "INTERACTION", "ANIMATION", "UX"],
    },
    {
      number: "03",
      title: ["AI-POWERED", "APPLICATIONS"],
      description:
        "Exploring AI-powered products by connecting intelligent APIs, document workflows and useful interfaces to solve real-world problems.",
      tags: ["AI APIS", "PDF Q&A", "AI TOOLS", "RAG"],
    },
    {
      number: "04",
      title: ["FULL-STACK", "DEVELOPMENT"],
      description:
        "Connecting beautiful frontends with practical backends, APIs, authentication and databases to build complete web applications.",
      tags: ["NODE", "EXPRESS", "FIREBASE", "APIS"],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;

    if (!section || !glow) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("whatido-visible");
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="whatido-section"
      id="what-i-do"
      ref={sectionRef}
    >
      {/* Cursor glow */}
      <div
        className="whatido-cursor-glow"
        ref={glowRef}
      ></div>

      {/* Background number */}
      <div className="whatido-background-number">03</div>

      <div className="whatido-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="whatido-header">

          <div className="whatido-label">
            <span className="whatido-label-dot"></span>
            <span>WHAT I DO</span>
          </div>

          <span className="whatido-index">
            03 / 10
          </span>

        </div>


        {/* =================================================
            INTRO
        ================================================= */}

        <div className="whatido-intro">

          <h2 className="whatido-heading">
            <span>IDEAS</span>
            <span className="heading-offset">INTO</span>
            <span>EXPERIENCES<b>.</b></span>
          </h2>

          <div className="whatido-intro-text">
            <span className="intro-line"></span>

            <p>
              I combine development, design, interaction
              and technology to create digital experiences
              that are built to be explored.
            </p>
          </div>

        </div>


        {/* =================================================
            SERVICES
        ================================================= */}

        <div className="whatido-services">

          {services.map((service, index) => (
           <article
  className="whatido-service"
  key={service.number}
>
  <div className="service-top">
    <span className="service-number">
      {service.number}
    </span>

    <span className="service-counter">
      0{index + 1} — 04
    </span>
  </div>

  <div className="service-main">
    <h3 className="service-title">
      {service.title.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </h3>

    <div className="service-details">
      <p className="service-description">
        {service.description}
      </p>

      <div className="service-tags">
        {service.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  </div>

  <div className="service-hover-number">
    {service.number}
  </div>
</article>
          ))}

        </div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="whatido-bottom">

          <span className="bottom-line"></span>

          <p>
            FROM FIRST IDEA TO FINAL PIXEL —
            <strong> I BUILD WITH INTENTION.</strong>
          </p>

          <span className="bottom-arrow">↓</span>

        </div>

      </div>
    </section>
  );
}

export default WhatIDo;