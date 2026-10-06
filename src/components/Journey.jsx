import { useEffect, useRef } from "react";
import "./Journey.css";

const journeyItems = [
  {
    year: "2020",
    number: "01",
    title: "COMPLETED SSLC",
    description:
      "Completed my SSLC at Pine Woods English School, completing the first major stage of my academic journey.",
    tags: ["SSLC", "2020", "PINE WOODS"],
    side: "left",
    location: "Pine Woods English School",
    locationUrl: "https://maps.app.goo.gl/SxF83QsoNAdh8YUG8",
  },

  {
    year: "MAR 2022",
    number: "02",
    title: "COMPLETED PUC",
    description:
      "Completed my PUC in March 2022 at St Pauls PU College, marking the next step toward higher education.",
    tags: ["PUC", "MARCH 2022", "ST PAULS"],
    side: "right",
    location: "St Pauls PU College",
    locationUrl: "https://maps.app.goo.gl/VyWvXocUrZLQepyc9",
  },

  {
    year: "JUN 2026",
    number: "03",
    title: "COMPLETED BCA",
    description:
      "Completed my BCA in June 2026 at IIFA Degree College, building my foundation in technology and preparing for my career in web development.",
    tags: ["BCA", "JUNE 2026", "IIFA"],
    side: "left",
    location: "IIFA Degree College",
    locationUrl: "https://maps.app.goo.gl/Ttyrj6Ryv3nU6TTK9",
  },

  {
    year: "2026",
    number: "04",
    title: "WEB DEVELOPMENT",
    description:
      "Started turning my knowledge into real projects, building websites and exploring React, Firebase, APIs, AI and creative web experiences.",
    tags: ["REACT", "FIREBASE", "AI"],
    side: "right",
    location: "Brand Vantage",
    locationUrl: "https://maps.app.goo.gl/rfVdx4kxYbQUY1x36",
  },

  {
    year: "NOW",
    number: "05",
    title: "BUILDING WHAT'S NEXT",
    description:
      "Continuing to learn, experiment and build — pushing myself toward better interfaces, stronger development skills and more creative digital experiences.",
    tags: ["BUILDING", "LEARNING", "EXPLORING"],
    side: "left",
    location: null,
    locationUrl: null,
  },
];

function Journey() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const progressRef = useRef(null);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    const progress = progressRef.current;
    const timeline = timelineRef.current;

    if (!section || !glow || !progress || !timeline) return;

    /* -----------------------------
       CURSOR GLOW
    ----------------------------- */

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    /* -----------------------------
       SECTION REVEAL
    ----------------------------- */

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("journey-visible");
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sectionObserver.observe(section);

    /* -----------------------------
       ITEM REVEAL
    ----------------------------- */

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("journey-item-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        itemObserver.observe(item);
      }
    });

    /* -----------------------------
       SCROLL TIMELINE
    ----------------------------- */

    const updateTimeline = () => {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.72;
      const end = windowHeight * 0.2;

      const availableDistance =
        rect.height - (start - end);

      const progressValue =
        (start - rect.top) / availableDistance;

      const clamped = Math.max(
        0,
        Math.min(1, progressValue)
      );

      progress.style.height = `${clamped * 100}%`;

      /* Active timeline node */

      const items = itemRefs.current.filter(Boolean);

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();

        const itemCenter =
          itemRect.top + itemRect.height / 2;

        if (
          itemCenter < windowHeight * 0.72 &&
          itemCenter > windowHeight * 0.18
        ) {
          item.classList.add("journey-item-active");

          items.forEach((otherItem, otherIndex) => {
            if (otherIndex !== index) {
              otherItem.classList.remove(
                "journey-item-active"
              );
            }
          });
        }
      });
    };

    window.addEventListener(
      "scroll",
      updateTimeline,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateTimeline
    );

    section.addEventListener(
      "mousemove",
      handleMouseMove
    );

    updateTimeline();

    return () => {
      section.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        updateTimeline
      );

      window.removeEventListener(
        "resize",
        updateTimeline
      );

      sectionObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <section
      className="journey-section"
      id="journey"
      ref={sectionRef}
    >
      <div
        className="journey-cursor-glow"
        ref={glowRef}
      ></div>

      <div className="journey-background-text">
        PATH
      </div>

      <div className="journey-container">

        {/* HEADER */}

        <div className="journey-header">
          <div className="journey-label">
            <span className="journey-label-dot"></span>
            <span>MY JOURNEY</span>
          </div>

          <span className="journey-index">
            06 / 10
          </span>
        </div>

        {/* INTRO */}

        <div className="journey-intro">

          <div className="journey-intro-left">

            <p className="journey-eyebrow">
              THE ROAD SO FAR
            </p>

            <h2 className="journey-title">
              LEARNING.
              <span>BUILDING.</span>
              <em>EVOLVING.</em>
            </h2>

          </div>

          <div className="journey-intro-right">

            <p>
              From completing my education to
              building real digital experiences,
              every stage has shaped the developer
              I&apos;m becoming today.
            </p>

          </div>

        </div>

        {/* TIMELINE */}

        <div
          className="journey-timeline"
          ref={timelineRef}
        >

          <div className="journey-line"></div>

          <div
            className="journey-line-progress"
            ref={progressRef}
          ></div>

          <div className="journey-items">

            {journeyItems.map((item, index) => (

              <article
                key={item.number}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                className={`
                  journey-item
                  journey-item-${index + 1}
                  journey-${item.side}
                `}
              >

                {/* YEAR */}

                <div className="journey-year">
                  {item.year}
                </div>

                {/* NODE */}

                <div className="journey-node">
                  <span className="journey-node-ring"></span>
                  <span className="journey-node-inner"></span>
                </div>

                {/* CONTENT */}

                <div className="journey-content">

                  <div className="journey-content-top">

                    <span className="journey-number">
                      {item.number}
                    </span>

                    <span className="journey-small-label">
                      MILESTONE
                    </span>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  {/* LOCATION */}

                  {item.location && (
                    <a
                      href={item.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="journey-location"
                      aria-label={`Open ${item.location} in Google Maps`}
                    >
                      <span className="journey-location-dot"></span>

                      <span>
                        {item.location}
                      </span>

                      <span className="journey-location-arrow">
                        ↗
                      </span>
                    </a>
                  )}

                  {/* TAGS */}

                  <div className="journey-tags">

                    {item.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>
        </div>

        {/* BOTTOM */}

        <div className="journey-bottom">

          <div className="journey-bottom-line"></div>

          <span>
            THE JOURNEY IS STILL BEING WRITTEN.
          </span>

          <div className="journey-bottom-line"></div>

        </div>

      </div>
    </section>
  );
}

export default Journey;