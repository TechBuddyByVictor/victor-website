import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const heroStats = [
  { value: "Fort Worth", label: "Texas base" },
  { value: "TechBuddy", label: "Active business" },
  { value: "Cybersecurity", label: "Core focus" },
];

const featuredPages = [
  {
    to: "/about",
    label: "About",
    title: "Background, direction, and personal vision.",
  },
  {
    to: "/experience",
    label: "Work",
    title: "Projects, systems, and technical proof.",
  },
  {
    to: "/techbuddy",
    label: "TechBuddy",
    title: "A dedicated business page with services and focus.",
  },
];

const highlights = [
  {
    label: "Real Work",
    value: "Systems, support, and execution that already exist outside of school projects.",
  },
  {
    label: "Business",
    value: "TechBuddy gives the brand real-world traction and credibility.",
  },
  {
    label: "Direction",
    value: "Cybersecurity, problem solving, and long-term founder growth.",
  },
];

const focusItems = ["Cybersecurity depth", "TechBuddy growth", "Cleaner technical proof"];

export default function HomePage() {
  return (
    <>
      <Reveal as="section" className="surface hero-card premium-hero" delay={40}>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Victor Licona / Fort Worth</span>
            <h1>Cybersecurity, systems, and founder-minded work.</h1>
            <p className="hero-lead">
              A premium personal site built around real technical work, clear direction, and a
              cleaner way to explore the brand.
            </p>

            <div className="hero-actions">
              <Link className="button" to="/experience">
                View Work
              </Link>
              <Link className="button-secondary" to="/techbuddy">
                TechBuddy
              </Link>
              <Link className="button-secondary" to="/contact#contact-form">
                Resume
              </Link>
            </div>

            <div className="stat-grid">
              {heroStats.map((item) => (
                <article key={item.value} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-rail">
            <div className="note-card focus-card-compact">
              <span className="section-label">Currently Focused On</span>
              <h2>Sharpening the work behind the brand.</h2>
              <div className="chip-row compact-chip-row">
                {focusItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={95}>
          <span className="eyebrow">Featured</span>
          <h2>Start with the page that fits what you want to see.</h2>
        </Reveal>

        <div className="page-link-grid">
          {featuredPages.map((item, index) => (
            <Reveal
              key={item.to}
              as={Link}
              to={item.to}
              className="surface page-link-card"
              delay={125 + index * 45}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface section-panel highlights-panel" delay={165}>
        <span className="section-label">Highlights</span>
        <div className="highlights-row">
          {highlights.map((item) => (
            <article key={item.label} className="highlight-item">
              <strong>{item.label}</strong>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="surface cta-band" delay={200}>
        <span className="section-label">Next Step</span>
        <h2>Everything else has its own page.</h2>
        <div className="hero-actions">
          <Link className="button" to="/about">
            About
          </Link>
          <Link className="button-secondary" to="/contact">
            Contact
          </Link>
        </div>
      </Reveal>
    </>
  );
}
