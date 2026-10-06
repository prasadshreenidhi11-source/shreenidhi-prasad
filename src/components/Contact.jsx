import { useEffect, useRef } from "react";
import "./Contact.css";

function Contact() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const titleRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    const title = titleRef.current;
    const orb = orbRef.current;

    if (!section || !glow || !title || !orb) return;

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;

      const moveX = (event.clientX - window.innerWidth / 2) * 0.018;
      const moveY = (event.clientY - window.innerHeight / 2) * 0.018;

      orb.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    const handleMouseLeave = () => {
      orb.style.transform = "translate3d(0, 0, 0)";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("contact-visible");
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  const socialLinks = [
    {
      number: "01",
      name: "GITHUB",
      short: "CODE",
      href: "https://github.com/prasadshreenidhi11-source",
    },
    {
      number: "02",
      name: "LINKEDIN",
      short: "CONNECT",
      href: "https://www.linkedin.com/in/shree-nidhi-prasad-b9637a43/?isSelfProfile=true",
    },
    {
      number: "03",
      name: "INSTAGRAM",
      short: "SOCIAL",
      href: "https://www.instagram.com/devadiga____guy?stkn=a3l4eXVleHMxMGE=",
    },
    {
      number: "04",
      name: "EMAIL",
      short: "MESSAGE",
      href: "mailto:prasadshreenidhi11@gmail.com",
    },
  ];

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-noise"></div>

      <div className="contact-cursor-glow" ref={glowRef}></div>

      <div className="contact-orb" ref={orbRef}>
        <div className="contact-orb-inner"></div>
        <div className="contact-orb-ring ring-one"></div>
        <div className="contact-orb-ring ring-two"></div>
        <div className="contact-orb-ring ring-three"></div>
      </div>

      <div className="contact-background-text">
        CONNECT
      </div>

      <div className="contact-container">

        {/* HEADER */}

        <div className="contact-header">
          <div className="contact-label">
            <span className="contact-label-dot"></span>
            <span>GET IN TOUCH</span>
          </div>

          <span className="contact-index">09 / 10</span>
        </div>

        {/* MAIN TITLE */}

        <div className="contact-main">

          <div className="contact-eyebrow">
            <span>HAVE AN IDEA?</span>
            <span>LET&apos;S MAKE IT REAL.</span>
          </div>

          <h2 className="contact-title" ref={titleRef}>
            <span className="contact-line">
              <span className="contact-word">LET&apos;S</span>
            </span>

            <span className="contact-line contact-line-offset">
              <span className="contact-word gradient-text">
                BUILD
              </span>
            </span>

            <span className="contact-line">
              <span className="contact-word">
                SOMETHING
              </span>
            </span>

            <span className="contact-line contact-line-offset-small">
              <span className="contact-word contact-great">
                GREAT<span>.</span>
              </span>
            </span>
          </h2>

          <div className="contact-description-wrap">
            <p className="contact-description">
              Whether it&apos;s a website, an interactive experience,
              an AI-powered idea or something completely new —
              I&apos;m always open to building something meaningful.
            </p>

            <a
              href="mailto:prasadshreenidhi11@gmail.com"
              className="contact-start-button"
            >
              <span className="contact-button-circle">
                ↗
              </span>

              <span className="contact-button-text">
                START A CONVERSATION
              </span>
            </a>
          </div>
        </div>

        {/* SOCIAL LINKS */}

        <div className="contact-social-section">

          <div className="contact-social-heading">
            <span>FIND ME ONLINE</span>
            <span>04 LINKS</span>
          </div>

          <div className="contact-social-list">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name === "EMAIL" ? undefined : "_blank"}
                rel={
                  social.name === "EMAIL"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="contact-social"
              >
                <span className="contact-social-number">
                  {social.number}
                </span>

                <span className="contact-social-name">
                  {social.name}
                </span>

                <span className="contact-social-type">
                  {social.short}
                </span>

                <span className="contact-social-arrow">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}

        <div className="contact-bottom">

          <div className="contact-availability">
            <span className="availability-dot"></span>

            <span>
              OPEN TO BUILD &amp; COLLABORATE
            </span>
          </div>

          <div className="contact-bottom-right">
            <span>SHREENIDHI</span>
            <span>WEB DEVELOPER</span>
            <span>2026</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;