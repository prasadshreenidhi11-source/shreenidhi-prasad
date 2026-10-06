import { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    const number = numberRef.current;

    if (!section || !glow || !number) return;

    // Cursor-following glow
    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    // Scroll reveal
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("about-visible");
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    // Background number parallax
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);

      const movement = (progress - 0.5) * 90;

      number.style.transform = `translateY(${movement}px)`;
    };

    section.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const socialLinks = [
    {
      label: "GitHub",
      short: "GH",
      href: "https://github.com/prasadshreenidhi11-source",
    },
    {
      label: "LinkedIn",
      short: "IN",
      href: "https://www.linkedin.com/in/shree-nidhi-prasad-b9637a43/?isSelfProfile=true",
    },
    {
      label: "Instagram",
      short: "IG",
      href: "https://www.instagram.com/devadiga____guy?stkn=a3l4eXVleHMxMGE=",
    },
    {
      label: "Email",
      short: "↗",
      href: "mailto:prasadshreenidhi11@gmail.com",
    },
  ];

  return (
    <section
      className="about-section"
      id="about"
      ref={sectionRef}
    >
      {/* Cursor-following glow */}
      <div
        className="about-cursor-glow"
        ref={glowRef}
      ></div>

      {/* Large background number */}
      <div
        className="about-background-number"
        ref={numberRef}
      >
        01
      </div>

      <div className="about-container">

        {/* SECTION INTRO */}
        <div className="about-top">
          <div className="about-label">
            <span className="about-label-dot"></span>
            <span>A LITTLE ABOUT ME</span>
          </div>

          <span className="about-index">
            01 / 10
          </span>
        </div>

        {/* MAIN INTRO */}
        <div className="about-main">

          <div className="about-heading-wrap">
            <p className="about-eyebrow">
              WEB DEVELOPER • BUILDER • CREATIVE
            </p>

            <h2 className="about-heading">
              I BUILD
              <span>THE WEB</span>
              <em>WITH PURPOSE.</em>
            </h2>
          </div>

          <div className="about-description-wrap">

            <p className="about-description">
              I&apos;m <strong>Shreenidhi</strong>, a web developer
              focused on creating modern, interactive and meaningful
              digital experiences. I enjoy turning ideas into
              responsive websites that don&apos;t just work well,
              but also feel smooth, engaging and memorable.
            </p>

            <p className="about-description secondary">
              I recently completed a <strong>2-month internship
              at Inspire Global Technology</strong>, where I worked
              on real-world web projects and developed
              <strong> 10+ websites</strong>. I&apos;m continuing
              to learn, experiment and build — exploring React,
              AI, Firebase, APIs and creative web experiences.
            </p>

          </div>

        </div>

        {/* STATS */}
        <div className="about-stats">

          <div className="about-stat">
            <span className="stat-number">01</span>

            <div className="stat-content">
              <span className="stat-value">WEB</span>
              <span className="stat-label">
                DEVELOPER
              </span>
            </div>

            <span className="stat-arrow">↗</span>
          </div>

          <div className="about-stat">
            <span className="stat-number">02</span>

            <div className="stat-content">
              <span className="stat-value">
                2 MONTHS
              </span>

              <span className="stat-label">
                INSPIRE GLOBAL TECHNOLOGY
              </span>
            </div>

            <span className="stat-arrow">↗</span>
          </div>

          <div className="about-stat">
            <span className="stat-number">03</span>

            <div className="stat-content">
              <span className="stat-value">
                10+
              </span>

              <span className="stat-label">
                WEBSITES DEVELOPED
              </span>
            </div>

            <span className="stat-arrow">↗</span>
          </div>

          <div className="about-stat">
            <span className="stat-number">04</span>

            <div className="stat-content">
              <span className="stat-value">
                NOW
              </span>

              <span className="stat-label">
                BUILDING &amp; LEARNING
              </span>
            </div>

            <span className="stat-arrow">↗</span>
          </div>

        </div>

        {/* BOTTOM AREA */}
        <div className="about-bottom">

          <div className="about-location">
            <span className="location-dot"></span>
            <span>BASED IN INDIA</span>
          </div>

          <div className="about-socials">

            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  social.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="about-social"
              >
                <span className="social-index">
                  0{index + 1}
                </span>

                <span className="social-name">
                  {social.label}
                </span>

                <span className="social-short">
                  {social.short}
                </span>

                <span className="social-arrow">
                  ↗
                </span>
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;