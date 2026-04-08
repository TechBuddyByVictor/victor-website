import { Link } from "react-router-dom";

const navigationCards = [
  {
    to: "/about",
    label: "Profile",
    title: "About",
    description: "Learn more about my mindset, values, and the standard I want my work to carry.",
    cta: "Read the profile",
  },
  {
    to: "/experience",
    label: "Work",
    title: "Experience",
    description: "A clean place for projects, capabilities, milestones, and the story behind them.",
    cta: "See the work",
  },
  {
    to: "/contact",
    label: "Connect",
    title: "Contact",
    description: "Reach out, start a conversation, or keep up with the platforms that matter most.",
    cta: "Open contact",
  },
];

const focusPoints = [
  {
    title: "Security Mindset",
    description: "I care about structure, trust, and protecting what matters.",
  },
  {
    title: "Entrepreneurial Drive",
    description: "I like building momentum, spotting opportunities, and creating value.",
  },
  {
    title: "Clean Execution",
    description: "Presentation matters. The work should feel sharp from first glance to final detail.",
  },
];

const profileTags = ["Cybersecurity", "Systems", "Discipline", "Growth"];

const metrics = [
  { value: "01", label: "Focused direction" },
  { value: "02", label: "Minimal style" },
  { value: "03", label: "Built to scale" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid">
        <div className="surface hero-copy section-reveal">
          <span className="eyebrow">Built With Intention</span>
          <h1>Security. Systems. Presence.</h1>
          <p>
            I&apos;m Victor Licona, a cybersecurity student and entrepreneur building a digital
            presence that feels clean, masculine, and quietly confident. The goal is simple:
            present my work, mindset, and ambition with clarity.
          </p>

          <div className="hero-actions">
            <Link className="button" to="/about">
              About Me
            </Link>
            <Link className="button-secondary" to="/contact">
              Contact
            </Link>
          </div>

          <div className="point-grid">
            {focusPoints.map((point) => (
              <article key={point.title} className="point-card">
                <strong>{point.title}</strong>
                <span>{point.description}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="surface hero-aside section-reveal" aria-label="Profile snapshot">
          <div className="profile-frame">
            <span className="profile-note">Victor Licona</span>
            <div className="profile-monogram">VL</div>
            <p>Sharp presentation, grounded ambition, and a foundation that keeps getting stronger.</p>
            <div className="profile-tags">
              {profileTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="metric-row">
            {metrics.map((metric) => (
              <article key={metric.value} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>

          <div className="aside-copy">
            <span className="section-label">Current Focus</span>
            <p>
              Strengthening technical foundations, building credible projects, and shaping a brand
              that looks as disciplined as the work behind it.
            </p>
          </div>
        </aside>
      </section>

      <section className="feature-grid">
        {navigationCards.map((card) => (
          <Link key={card.to} className="surface feature-card section-reveal" to={card.to}>
            <span className="section-label">{card.label}</span>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <span className="feature-link">{card.cta}</span>
          </Link>
        ))}
      </section>

      <section className="split-grid">
        <article className="surface section-panel section-reveal">
          <span className="section-label">Why This Works</span>
          <h2>A calm, serious look without feeling cold.</h2>
          <p className="body-copy">
            This design leans dark, minimal, and confident. It stays classy by keeping the layout
            clean, the palette restrained, and the details deliberate instead of loud.
          </p>
        </article>

        <article className="surface section-panel section-reveal">
          <span className="section-label">First Impression</span>
          <ul className="list">
            <li>Clear enough for recruiters, collaborators, and clients to understand you quickly.</li>
            <li>Strong enough to feel personal instead of looking like a generic portfolio template.</li>
            <li>Flexible enough to grow as you add real projects, links, and experience.</li>
          </ul>
        </article>
      </section>
    </>
  );
}
