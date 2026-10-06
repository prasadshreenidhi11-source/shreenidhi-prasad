import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background page scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* LOGO */}
        <button
          className="nav-logo"
          onClick={() => scrollToSection("hero")}
        >
          SHREENIDHI
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="nav-links">
          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Work
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("journey")}>
            Journey
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>

        {/* DESKTOP CTA */}
        <button
          className="nav-cta"
          onClick={() => scrollToSection("contact")}
        >
          Let&apos;s Talk
          <span>↗</span>
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`nav-menu-button ${menuOpen ? "menu-active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`mobile-menu-overlay ${
          menuOpen ? "mobile-menu-overlay-open" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <aside
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-header">
          <span>MENU</span>

          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <div className="mobile-menu-links">
          <button onClick={() => scrollToSection("about")}>
            <span>01</span>
            About
          </button>

          <button onClick={() => scrollToSection("projects")}>
            <span>02</span>
            Work
          </button>

          <button onClick={() => scrollToSection("skills")}>
            <span>03</span>
            Skills
          </button>

          <button onClick={() => scrollToSection("journey")}>
            <span>04</span>
            Journey
          </button>

          <button onClick={() => scrollToSection("contact")}>
            <span>05</span>
            Contact
          </button>
        </div>

        <button
          className="mobile-menu-cta"
          onClick={() => scrollToSection("contact")}
        >
          Let&apos;s Talk
          <span>↗</span>
        </button>

        <div className="mobile-menu-footer">
          <span>FRONTEND DEVELOPER</span>
          <span>© 2026</span>
        </div>
      </aside>
    </>
  );
}

export default Navbar;