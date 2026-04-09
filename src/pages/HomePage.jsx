import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const entryLinks = [
  {
    to: "/about",
    label: "About",
    title: "Who I am and how I build.",
    copy: "Background, direction, and the mindset behind the work.",
  },
  {
    to: "/experience",
    label: "Work",
    title: "Projects, systems, and proof.",
    copy: "A sharper look at the technical and business work already in motion.",
  },
  {
    to: "/techbuddy",
    label: "TechBuddy",
    title: "A real business, clearly positioned.",
    copy: "Local tech support built around trust, clarity, and practical help.",
  },
];

const signals = [
  {
    label: "Cybersecurity",
    value: "Long-term direction built around security, systems, and modern technology.",
  },
  {
    label: "TechBuddy",
    value: "A local business built to help real people solve everyday tech problems.",
  },
  {
    label: "Execution",
    value: "Web, media systems, support, and digital operations with real-world context.",
  },
];

const focusItems = [
  "Growing in cybersecurity",
  "Building TechBuddy by Victor",
  "Creating better digital systems and experiences",
];

export default function HomePage() {
  return (
    <>
      <Reveal as="section" className="surface hero-card premium-hero home-hero" delay={40}>
        <div className="hero-grid hero-grid-home">
          <div className="hero-copy">
            <span className="eyebrow">Victor Licona / Fort Worth</span>
            <h1>Cybersecurity, technology, and entrepreneurship with real-world traction.</h1>
            <p className="hero-lead">
              I build digital experiences, solve technical problems, and create systems that help
              people, organizations, and businesses move forward.
            </p>

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

          <aside className="hero-rail hero-rail-home">
            <div className="note-card signal-card">
              <span className="section-label">Currently Focused On</span>
              <ul className="mini-list">
                {focusItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="note-card signal-card signal-card-quiet">
              <span className="kicker">TechBuddy by Victor</span>
              <p>Local tech support designed to feel clear, calm, and trustworthy.</p>
            </div>
          </aside>
        </div>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Explore</span>
          <h2>A simpler way into the site.</h2>
        </Reveal>

        <div className="page-link-grid home-entry-grid">
          {entryLinks.map((item, index) => (
            <Reveal
              key={item.to}
              as={Link}
              to={item.to}
              className="surface page-link-card"
              delay={120 + index * 45}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface section-panel signal-strip" delay={175}>
        <span className="section-label">Highlights</span>
        <div className="highlights-row">
          {signals.map((item) => (
            <article key={item.label} className="highlight-item">
              <strong>{item.label}</strong>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </>
  );
}
