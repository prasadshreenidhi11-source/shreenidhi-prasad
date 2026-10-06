import { useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "ATELIER",
    category: "WEB EXPERIENCE",
    url: "https://atelier-web-rust.vercel.app/",
  },
  {
    number: "02",
    title: "ABILITY HUB",
    category: "WEB EXPERIENCE",
    url: "https://ability-hub.vercel.app/",
  },
  {
    number: "03",
    title: "DENTIA",
    category: "WEB EXPERIENCE",
    url: "https://dentia-dental.vercel.app/",
  },
  {
    number: "04",
    title: "ANGELIC CARE",
    category: "WEB EXPERIENCE",
    url: "https://angelic-care-six.vercel.app/",
  },
  {
    number: "05",
    title: "NDIS DISABILITY",
    category: "WEB EXPERIENCE",
    url: "https://ndis-disable-web.vercel.app/",
  },
  {
    number: "06",
    title: "MERCEDES",
    category: "AUTOMOTIVE EXPERIENCE",
    url: "https://mercedes-automotive.vercel.app/",
  },
  {
    number: "07",
    title: "HERO CAR",
    category: "AUTOMOTIVE EXPERIENCE",
    url: "https://hero-car-delta.vercel.app/",
  },
  {
    number: "08",
    title: "ONE AUTOMOBILE",
    category: "AUTOMOTIVE EXPERIENCE",
    url: "https://one-automobile.vercel.app/",
  },
  {
    number: "09",
    title: "FINANCE",
    category: "FINANCIAL EXPERIENCE",
    url: "https://finance-web-two-rouge.vercel.app/",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;

    if (!section || !glow) return;

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

   const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      section.classList.add("projects-visible");
    }
  },
  {
    threshold: 0.01,
    rootMargin: "0px 0px -10% 0px",
  }
);
    observer.observe(section);

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    const handlers = cards.map((card) => {
      const handleMove = (event) => {
        if (window.innerWidth <= 800) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 7;
        const rotateX = ((centerY - y) / centerY) * 7;

        card.style.setProperty("--rotate-x", `${rotateX}deg`);
        card.style.setProperty("--rotate-y", `${rotateY}deg`);

        card.style.setProperty(
          "--mouse-x",
          `${(x / rect.width) * 100}%`
        );

        card.style.setProperty(
          "--mouse-y",
          `${(y / rect.height) * 100}%`
        );
      };

      const handleLeave = () => {
        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
        card.style.setProperty("--mouse-x", "50%");
        card.style.setProperty("--mouse-y", "50%");
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      return {
        card,
        handleMove,
        handleLeave,
      };
    });

    return () => {
      handlers.forEach(({ card, handleMove, handleLeave }) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <section
      className="projects-section"
      id="projects"
      ref={sectionRef}
    >
      <div className="projects-cursor-glow" ref={glowRef}></div>

      <div className="projects-background-text">
        WORK
      </div>

      <div className="projects-container">

        {/* HEADER */}

        <div className="projects-header">
          <div className="projects-label">
            <span className="projects-label-dot"></span>
            <span>SELECTED WORK</span>
          </div>

          <span className="projects-index">
            05 / 10
          </span>
        </div>

        <div className="projects-intro">

          <div className="projects-intro-left">
            <p className="projects-eyebrow">
              THINGS I&apos;VE BUILT
            </p>

            <h2 className="projects-title">
              IDEAS
              <span>INTO</span>
              <em>EXPERIENCES.</em>
            </h2>
          </div>

          <div className="projects-intro-right">
            <p>
              A collection of websites and digital
              experiences I&apos;ve designed and built while
              learning, experimenting and turning ideas
              into real products.
            </p>

            <div className="projects-count">
              <strong>09</strong>
              <span>PROJECTS</span>
            </div>
          </div>

        </div>

        {/* PROJECT STACK */}

        <div className="projects-stage">

          {projects.map((project, index) => (
            <article
              className={`project-card project-card-${index + 1}`}
              key={project.number}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
            >
              <div className="project-card-inner">

                {/* top information */}

                <div className="project-card-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                {/* browser preview */}

                <div className="project-preview">

                  <div className="browser-bar">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-address">
                      {project.url.replace("https://", "").replace("/", "")}
                    </div>

                    <div className="browser-status">
                      LIVE
                    </div>
                  </div>

                  <div className="project-screen">

                    <div className="screen-loader">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <iframe
                      src={project.url}
                      title={`${project.title} live preview`}
                      loading="lazy"
                      className="project-iframe"
                    />

                    <div className="preview-overlay"></div>

                    <div className="preview-title">
                      <span>{project.number}</span>
                      <strong>{project.title}</strong>
                    </div>

                  </div>

                </div>

                {/* bottom information */}

                <div className="project-card-bottom">

                  <div className="project-name-wrap">
                    <span className="project-mini-label">
                      PROJECT
                    </span>

                    <h3>{project.title}</h3>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-button"
                  >
                    <span>VIEW LIVE</span>
                    <span className="live-dot"></span>
                  </a>

                </div>

              </div>
            </article>
          ))}

        </div>

        {/* ENDING TEXT */}

        <div className="projects-footer">

          <div className="projects-footer-line"></div>

          <p>
            MORE IDEAS.
            <span>MORE BUILDS.</span>
            MORE TO COME.
          </p>

          <div className="projects-footer-line"></div>

        </div>

      </div>
    </section>
  );
}

export default Projects;