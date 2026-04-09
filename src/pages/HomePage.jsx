import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const heroStats = [
  { value: "Fort Worth", label: "Texas base" },
  { value: "TechBuddy", label: "Real business" },
  { value: "Cybersecurity", label: "Primary focus" },
];

const pageLinks = [
  {
    to: "/about",
    label: "About",
    title: "Background, direction, and vision.",
  },
  {
    to: "/experience",
    label: "Work",
    title: "Projects, technical work, and proof.",
  },
  {
    to: "/techbuddy",
    label: "TechBuddy",
    title: "A dedicated page for the business.",
  },
  {
    to: "/contact",
    label: "Contact",
    title: "Clear and direct ways to reach me.",
  },
];

export default function HomePage() {
  return (
    <>
      <Reveal as="section" className="surface hero-card" delay={40}>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Victor Licona</span>
            <h1>Cybersecurity, systems, and founder-minded work.</h1>
            <p className="hero-lead">
              A cleaner personal site built around real technical work, long-term ambition, and a
              serious brand direction.
            </p>

            <div className="hero-actions">
              <Link className="button" to="/experience">
                View Work
              </Link>
              <Link className="button-secondary" to="/techbuddy">
                TechBuddy
              </Link>
              <Link className="button-secondary" to="/about">
                About
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
            <div className="note-card">
              <span className="section-label">Front Door</span>
              <h2>Simple, focused, and easy to explore.</h2>
              <p>
                This homepage is intentionally light. The full story lives inside the pages above.
              </p>
            </div>
          </aside>
        </div>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={100}>
          <span className="eyebrow">Explore</span>
          <h2>Each page has one clear purpose.</h2>
        </Reveal>

        <div className="page-link-grid">
          {pageLinks.map((item, index) => (
            <Reveal
              key={item.to}
              as={Link}
              to={item.to}
              className="surface page-link-card"
              delay={130 + index * 45}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface section-panel" delay={180}>
        <span className="section-label">Quick Intro</span>
        <h2>Built for real work, not just presentation.</h2>
        <p className="body-copy">
          I am from Fort Worth, Texas and I am building around cybersecurity, technical problem
          solving, and business. The goal is to make the site feel clear, premium, and easy to
          navigate.
        </p>
      </Reveal>
    </>
  );
}
