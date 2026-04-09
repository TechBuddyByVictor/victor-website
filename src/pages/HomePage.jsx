import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const heroStats = [
  { value: "Fort Worth", label: "Texas base" },
  { value: "Cybersecurity", label: "Long-term focus" },
  { value: "TechBuddy", label: "Founded by Victor" },
];

const featuredPages = [
  {
    to: "/about",
    label: "About",
    title: "Background, direction, and vision.",
  },
  {
    to: "/experience",
    label: "Work",
    title: "Projects, systems, and experience.",
  },
  {
    to: "/techbuddy",
    label: "TechBuddy",
    title: "Local tech support with clarity and trust.",
  },
];

const highlights = [
  {
    label: "Cybersecurity",
    value: "Focused on building a future in cybersecurity, digital systems, and modern technology.",
  },
  {
    label: "TechBuddy by Victor",
    value: "Local tech support designed to help families, seniors, and small businesses with confidence.",
  },
  {
    label: "Real-World Projects",
    value: "Hands-on work across websites, media systems, technical support, and business operations.",
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
      <Reveal as="section" className="surface hero-card premium-hero" delay={40}>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Victor Licona</span>
            <h1>Victor Licona</h1>
            <p className="hero-lead">
              Cybersecurity, technology, and entrepreneurship - built around real-world problem
              solving.
            </p>
            <p>
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
        <span className="section-label">Featured Highlights</span>
        <div className="highlights-row">
          {highlights.map((item) => (
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
