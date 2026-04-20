import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PortraitFrame from "../components/PortraitFrame";
import Reveal from "../components/Reveal";

const entryLinks = [
  {
    to: "/about",
    label: "About",
    title: "Fort Worth roots, cybersecurity goals, and a hands-on builder mindset.",
  },
  {
    to: "/experience",
    label: "Work",
    title: "Projects, technical support, systems work, and real execution.",
  },
  {
    to: "/techbuddy",
    label: "TechBuddy",
    title: "Clear local tech support for people who want dependable help.",
  },
];

const focusItems = ["Cybersecurity", "Digital safety", "TechBuddy by Victor", "Practical systems"];
const heroLayerItems = [
  { label: "Based In", value: "Fort Worth, Texas" },
  { label: "Focused On", value: "Cybersecurity, digital safety, and support" },
  { label: "Building", value: "TechBuddy by Victor and practical web systems" },
];
const operatingModes = [
  {
    id: "security",
    label: "Security",
    code: "01",
    title: "Safer habits, clearer systems.",
    copy: "Digital safety, scam awareness, account basics, and practical cybersecurity thinking.",
    readout: "Monitor / Explain / Harden",
    signal: "82",
  },
  {
    id: "techbuddy",
    label: "TechBuddy",
    code: "02",
    title: "Local help that feels human.",
    copy: "Support for devices, Wi-Fi, printers, phones, setup, and everyday technology problems.",
    readout: "Listen / Fix / Clarify",
    signal: "91",
  },
  {
    id: "systems",
    label: "Systems",
    code: "03",
    title: "Workflows that do not fall apart.",
    copy: "Websites, media systems, digital workflows, and technical details that need consistency.",
    readout: "Build / Test / Refine",
    signal: "76",
  },
  {
    id: "growth",
    label: "Growth",
    code: "04",
    title: "Long-term direction with standards.",
    copy: "Cybersecurity, business thinking, execution, and steady improvement over time.",
    readout: "Learn / Ship / Compound",
    signal: "88",
  },
];
const portraitSrc = "/victor-portrait.jpg";

export default function HomePage() {
  const [activeModeId, setActiveModeId] = useState(operatingModes[0].id);
  const [isModePaused, setIsModePaused] = useState(false);
  const activeMode =
    operatingModes.find((mode) => mode.id === activeModeId) ?? operatingModes[0];
  const activeIndex = operatingModes.findIndex((mode) => mode.id === activeMode.id);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isModePaused || prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveModeId((currentId) => {
        const currentIndex = operatingModes.findIndex((mode) => mode.id === currentId);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % operatingModes.length : 0;

        return operatingModes[nextIndex].id;
      });
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [isModePaused]);

  return (
    <>
      <Reveal as="section" className="page-hero hero-home hero-home-signature" delay={40}>
        <div className="hero-editorial">
          <div className="hero-topline">
            <span className="eyebrow">Victor Licona</span>
            <span className="hero-topline-note">Building Now</span>
          </div>

          <div className="hero-editorial-body">
            <div className="hero-visual-column">
              <div className="hero-signal-animation" aria-hidden="true">
                <span className="hero-signal-axis hero-signal-axis-x" />
                <span className="hero-signal-axis hero-signal-axis-y" />
                <span className="hero-signal-pulse hero-signal-pulse-one" />
                <span className="hero-signal-pulse hero-signal-pulse-two" />
                <span className="hero-signal-pulse hero-signal-pulse-three" />
                <span className="hero-signal-node hero-signal-node-one" />
                <span className="hero-signal-node hero-signal-node-two" />
                <span className="hero-signal-node hero-signal-node-three" />
                <span className="hero-signal-scan" />
              </div>
              <PortraitFrame
                className="hero-portrait-feature"
                src={portraitSrc}
                alt="Victor Licona portrait"
                eyebrow="Victor Licona"
                title="Victor Licona"
                caption="Fort Worth, Texas"
              />
              <div className="hero-photo-badge" aria-hidden="true">
                <span>Now</span>
                <strong>Building</strong>
              </div>
            </div>

            <div className="hero-copy-column">
              <h1>Victor Licona</h1>
              <p className="hero-copyline">
                Cybersecurity, digital safety, and practical tech support.
              </p>
              <p className="hero-supportline">
                Fort Worth builder focused on useful systems, safer habits, and clear help for
                people who want technology to feel less confusing.
              </p>
              <div className="hero-mobile-focus" aria-label="Current focus">
                <span>Fort Worth</span>
                <span>TechBuddy</span>
                <span>Digital safety</span>
              </div>
              <div className="hero-note-list" aria-label="Current direction">
                <span>Cybersecurity</span>
                <span>TechBuddy by Victor</span>
                <span>Practical web systems</span>
              </div>
              <div className="hero-actions">
                <Link className="button" to="/experience">
                  View My Work
                </Link>
                <Link className="button-secondary" to="/about">
                  About Me
                </Link>
                <Link className="button-secondary" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-layer" aria-label="Hero highlights">
            {heroLayerItems.map((item) => (
              <div key={item.label} className="hero-layer-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <section className="page-section" id="start-here">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Start Here</span>
          <h2>A quick path through what I am building.</h2>
        </Reveal>

        <div className="entry-grid">
          {entryLinks.map((item, index) => (
            <Reveal
              key={item.to}
              as={Link}
              to={item.to}
              className={`entry-link${index === 0 ? " entry-link-feature" : ""}`}
              delay={120 + index * 40}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="ops-board" delay={165}>
        <div className="ops-board-copy">
          <span className="section-label">Operating Board</span>
          <h2>Choose a track. See the signal.</h2>
          <p>
            Four lanes behind the work: safety, support, systems, and long-term execution.
          </p>
        </div>

        <div
          className="ops-console"
          style={{
            "--ops-signal-bar": `${Number(activeMode.signal) * 0.76}%`,
            "--ops-needle-angle": `${activeIndex * 28 - 42}deg`,
          }}
          onMouseEnter={() => setIsModePaused(true)}
          onMouseLeave={() => setIsModePaused(false)}
          onFocusCapture={() => setIsModePaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsModePaused(false);
            }
          }}
        >
          <div className="ops-console-head">
            <span>{activeMode.code}</span>
            <strong>{activeMode.label}</strong>
          </div>

          <div className="ops-console-main">
            <div className="ops-signal-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div key={activeMode.id} className="ops-console-copy">
              <h3>{activeMode.title}</h3>
              <p>{activeMode.copy}</p>
            </div>
          </div>

          <div key={`${activeMode.id}-readout`} className="ops-readout">
            <span>{activeMode.readout}</span>
            <strong>{activeMode.signal}%</strong>
          </div>

          <div className="ops-mode-list" aria-label="Operating board tracks">
            {operatingModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                className={`ops-mode${mode.id === activeMode.id ? " is-active" : ""}`}
                aria-pressed={mode.id === activeMode.id}
                onClick={() => setActiveModeId(mode.id)}
              >
                <span>{mode.code}</span>
                {mode.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="focus-strip focus-strip-signature" delay={170}>
        <span className="section-label">Current Focus</span>
        <p>Cybersecurity, digital safety, and useful systems that make everyday technology easier.</p>
        <div className="chip-row">
          {focusItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Reveal>
    </>
  );
}
