import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const principles = [
  "Trust matters as much as technical skill.",
  "Useful work matters more than loud branding.",
  "Discipline compounds into credibility.",
];

const timelineItems = [
  {
    time: "Foundation",
    title: "Real technical environments",
    description: "Support, systems, and people-facing work shaped how I think.",
  },
  {
    time: "Now",
    title: "Cybersecurity and business",
    description: "I am building technical depth while growing TechBuddy into something real.",
  },
  {
    time: "Next",
    title: "Long-term scale",
    description: "The bigger direction is security, leadership, and future companies.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">About</span>
        <h1>Focused, grounded, and building with intent.</h1>
        <p>
          I am Victor Licona, based in Fort Worth, Texas. I am building around cybersecurity,
          technology, and business with a serious long-term mindset.
        </p>
      </Reveal>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={90}>
          <span className="section-label">Summary</span>
          <h2>I want the work to feel as sharp as the brand.</h2>
          <p className="body-copy">
            I care about systems, trust, clean execution, and solving problems without adding
            noise. The goal is not to look advanced. It is to become genuinely credible.
          </p>
        </Reveal>

        <Reveal as="article" className="surface section-panel" delay={130}>
          <span className="section-label">Principles</span>
          <ul className="list">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Reveal as="section" className="surface section-panel" delay={170}>
        <span className="section-label">Path</span>
        <h2>The direction is clear.</h2>
        <div className="timeline">
          {timelineItems.map((item) => (
            <div key={item.title} className="timeline-item">
              <small>{item.time}</small>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="surface cta-band" delay={210}>
        <span className="section-label">Continue</span>
        <h2>See the work behind the positioning.</h2>
        <div className="hero-actions">
          <Link className="button" to="/experience">
            View Work
          </Link>
          <Link className="button-secondary" to="/contact">
            Contact
          </Link>
        </div>
      </Reveal>
    </>
  );
}
