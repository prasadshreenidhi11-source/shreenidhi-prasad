import { useEffect, useRef } from "react";
import "./Footer.css";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("footer-visible");
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    {
      name: "GITHUB",
      href: "https://github.com/prasadshreenidhi11-source",
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/in/shree-nidhi-prasad-b9637a43/?isSelfProfile=true",
    },
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/devadiga____guy?stkn=a3l4eXVleHMxMGE=",
    },
    {
      name: "EMAIL",
      href: "mailto:prasadshreenidhi11@gmail.com",
    },
  ];

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* TOP */}

        <div className="footer-top">

          <div className="footer-brand">
            <span className="footer-brand-small">
              FRONTEND DEVELOPER
            </span>

            <h2 className="footer-brand-name">
              SHREENIDHI<span>.</span>
            </h2>
          </div>

          <div className="footer-intro">
            <p>
              Building digital experiences with code,
              creativity and curiosity.
            </p>

            <span>
              REACT • AI • CREATIVE WEB
            </span>
          </div>

        </div>

        {/* HUGE WORDMARK */}

        <div className="footer-wordmark-wrap">
          <div className="footer-wordmark">
            SHREE
          </div>

          <div className="footer-wordmark-outline">
            NIDHI
          </div>
        </div>

        {/* MIDDLE */}

        <div className="footer-middle">

          <div className="footer-navigation">

            <span className="footer-label">
              CONNECT
            </span>

            <div className="footer-links">
              {footerLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === "EMAIL" ? undefined : "_blank"}
                  rel={
                    link.name === "EMAIL"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="footer-link"
                >
                  <span className="footer-link-number">
                    0{index + 1}
                  </span>

                  <span className="footer-link-name">
                    {link.name}
                  </span>

                  <span className="footer-link-arrow">
                    ↗
                  </span>
                </a>
              ))}
            </div>

          </div>

          {/* BACK TO TOP */}

          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span className="footer-top-arrow">
              ↑
            </span>

            <span className="footer-top-text">
              BACK
              <br />
              TO TOP
            </span>
          </button>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <div className="footer-bottom-left">
            <span>
              © 2026 SHREENIDHI
            </span>

            <span>
              ALL RIGHTS RESERVED
            </span>
          </div>

          <div className="footer-bottom-center">
            DESIGNED &amp; BUILT FROM SCRATCH
          </div>

          <div className="footer-bottom-right">
            <span className="footer-status-dot"></span>
            <span>
              KEEP BUILDING.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;