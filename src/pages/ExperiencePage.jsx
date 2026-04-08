import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const projects = [
  {
    label: "TechBuddy by Victor",
    title: "Local tech support with real-world credibility.",
    description:
      "A service business built around clarity, trust, and practical help for seniors, families, and small businesses.",
  },
  {
    label: "Church Media",
    title: "Live systems that need to work the first time.",
    description:
      "Hands-on support with livestream and media systems where reliability and calm execution matter.",
  },
  {
    label: "Brand and Web",
    title: "Digital presence built with stronger standards.",
    description:
      "A cleaner personal brand designed to match the seriousness of the work and the direction behind it.",
  },
];

const specialties = [
  "Cybersecurity mindset",
  "Technical support",
  "Wi-Fi and device setup",
  "Livestream systems",
  "Clear client communication",
  "Founder-level execution",
];

const signals = [
  "I work with real users.",
  "I care about reliability.",
  "I am building for the long term.",
];

export default function ExperiencePage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">Work</span>
        <h1>Clean proof. Clear direction.</h1>
        <p>
          This page is a focused look at the work, systems, and business effort already shaping the
          brand.
        </p>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Selected Work</span>
          <h2>The projects that carry the most weight right now.</h2>
        </Reveal>

        <div className="project-grid project-grid-wide">
          {projects.map((project, index) => (
            <Reveal
              key={project.label}
              as="article"
              className="surface project-card"
              delay={130 + index * 55}
            >
              <span className="kicker">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={180}>
          <span className="section-label">Specialties</span>
          <div className="chip-row">
            {specialties.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>

        <Reveal as="article" className="surface section-panel" delay={220}>
          <span className="section-label">Signal</span>
          <ul className="list">
            {signals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Reveal as="section" className="surface cta-band" delay={250}>
        <span className="section-label">Contact</span>
        <h2>If the work fits, let&apos;s talk.</h2>
        <div className="hero-actions">
          <Link className="button" to="/contact">
            Contact
          </Link>
          <Link className="button-secondary" to="/about">
            About
          </Link>
        </div>
      </Reveal>
    </>
  );
}
