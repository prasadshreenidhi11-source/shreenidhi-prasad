import { useEffect, useRef } from "react";
import "./HowIWork.css";

const workSteps = [
  {
    number: "01",
    title: "DISCOVER",
    short: "UNDERSTAND THE IDEA",
    description:
      "I start by understanding the idea, goals, audience and what the website needs to achieve.",
    tags: ["IDEA", "GOALS", "AUDIENCE"],
  },
  {
    number: "02",
    title: "PLAN",
    short: "STRUCTURE THE EXPERIENCE",
    description:
      "I break the idea into sections, features, content, interactions and a clear development structure.",
    tags: ["STRUCTURE", "FEATURES", "FLOW"],
  },
  {
    number: "03",
    title: "DESIGN",
    short: "SHAPE THE DIRECTION",
    description:
      "I shape the visual direction through layout, typography, spacing, colors, interactions and motion.",
    tags: ["LAYOUT", "TYPE", "MOTION"],
  },
  {
    number: "04",
    title: "BUILD",
    short: "TURN IDEAS INTO CODE",
    description:
      "I turn the concept into a responsive experience using React, APIs, Firebase, backend services and reusable components when needed.",
    tags: ["REACT", "APIs", "FIREBASE"],
  },
  {
    number: "05",
    title: "REFINE",
    short: "POLISH THE EXPERIENCE",
    description:
      "I test across screens, fix issues, improve interactions and animations, and polish the final experience.",
    tags: ["TEST", "POLISH", "OPTIMIZE"],
  },
];

function HowIWork() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!section || !glow || !track || !progress) return;

    /* --------------------------------
       CURSOR GLOW
    -------------------------------- */

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    section.addEventListener("mousemove", handleMouseMove);

    /* --------------------------------
       SECTION REVEAL
    -------------------------------- */

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("how-work-visible");
        }
      },
      {
        threshold: 0.08,
      }
    );

    sectionObserver.observe(section);

    /* --------------------------------
       STEP REVEAL
    -------------------------------- */

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("how-work-step-visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    stepRefs.current.forEach((step) => {
      if (step) {
        stepObserver.observe(step);
      }
    });

    /* --------------------------------
       SCROLL PROGRESS
    -------------------------------- */

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const sectionProgress =
        (viewportHeight - rect.top) /
        (viewportHeight + rect.height);

      const clampedProgress = Math.max(
        0,
        Math.min(1, sectionProgress)
      );

      progress.style.width = `${clampedProgress * 100}%`;

      /* Active step */

      const steps = stepRefs.current.filter(Boolean);

      let activeIndex = -1;
      let closestDistance = Infinity;

      steps.forEach((step, index) => {
        const stepRect = step.getBoundingClientRect();

        const center =
          stepRect.left + stepRect.width / 2;

        const distance = Math.abs(
          center - window.innerWidth / 2
        );

        if (
          distance < closestDistance &&
          center > 0 &&
          center < window.innerWidth
        ) {
          closestDistance = distance;
          activeIndex = index;
        }
      });

      steps.forEach((step, index) => {
        if (index === activeIndex) {
          step.classList.add("how-work-step-active");
        } else {
          step.classList.remove("how-work-step-active");
        }
      });
    };

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    updateProgress();

    return () => {
      section.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );

      sectionObserver.disconnect();
      stepObserver.disconnect();
    };
  }, []);

  return (
    <section
      className="how-work-section"
      id="how-i-work"
      ref={sectionRef}
    >
      {/* Background */}

      <div className="how-work-background-text">
        PROCESS
      </div>

      <div
        className="how-work-cursor-glow"
        ref={glowRef}
      ></div>

      <div className="how-work-container">

        {/* HEADER */}

        <div className="how-work-header">
          <div className="how-work-label">
            <span className="how-work-label-dot"></span>
            <span>HOW I WORK</span>
          </div>

          <span className="how-work-index">
            07 / 10
          </span>
        </div>

        {/* INTRO */}

        <div className="how-work-intro">

          <div className="how-work-intro-left">

            <p className="how-work-eyebrow">
              FROM IDEA TO EXPERIENCE
            </p>

            <h2 className="how-work-title">
              FROM
              <span>IDEA.</span>
              <em>TO IMPACT.</em>
            </h2>

          </div>

          <div className="how-work-intro-right">

            <p>
              Every project starts with an idea.
              I turn that idea into a structured,
              interactive and refined digital
              experience through a simple process.
            </p>

          </div>

        </div>

        {/* PROCESS */}

        <div className="how-work-process">

          <div className="how-work-progress">
            <div
              className="how-work-progress-fill"
              ref={progressRef}
            ></div>
          </div>

          <div
            className="how-work-track"
            ref={trackRef}
          >

            {workSteps.map((step, index) => (

              <article
                key={step.number}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                className={`how-work-step how-work-step-${index + 1}`}
              >

                {/* Number */}

                <div className="how-work-step-number">
                  {step.number}
                </div>

                {/* Main Card */}

                <div className="how-work-card">

                  <div className="how-work-card-top">

                    <span>
                      STEP {step.number}
                    </span>

                    <span className="how-work-card-dot"></span>

                  </div>

                  <div className="how-work-card-main">

                    <h3>
                      {step.title}
                    </h3>

                    <span className="how-work-short">
                      {step.short}
                    </span>

                    <p>
                      {step.description}
                    </p>

                  </div>

                  <div className="how-work-tags">

                    {step.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="how-work-card-line"></div>

                  <div className="how-work-card-footer">

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      {index === workSteps.length - 1
                        ? "DONE"
                        : "NEXT"}
                    </span>

                  </div>

                </div>

                {/* Connector */}

                {index < workSteps.length - 1 && (
                  <div className="how-work-connector">
                    <span></span>
                  </div>
                )}

              </article>

            ))}

          </div>
        </div>

        {/* BOTTOM */}

        <div className="how-work-bottom">

          <div className="how-work-bottom-line"></div>

          <span>
            SIMPLE PROCESS. BETTER EXPERIENCES.
          </span>

          <div className="how-work-bottom-line"></div>

        </div>

      </div>
    </section>
  );
}

export default HowIWork;