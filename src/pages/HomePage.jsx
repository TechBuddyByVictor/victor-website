import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const heroStats = [
  { value: "Fort Worth", label: "Texas base" },
  { value: "TechBuddy", label: "Real business" },
  { value: "Cybersecurity", label: "Primary lane" },
];

const focusAreas = [
  {
    label: "Security",
    title: "Cybersecurity with practical context",
    description: "Built around trust, systems, and clear thinking under pressure.",
  },
  {
    label: "Service",
    title: "Technical help for real people",
    description: "Support that feels calm, useful, and easy to trust.",
  },
  {
    label: "Business",
    title: "Founder energy with real traction",
    description: "TechBuddy gives the business side of the brand real weight.",
  },
];

const featuredWork = [
  {
    label: "TechBuddy by Victor",
    title: "Local support built to feel credible.",
    description:
      "Bilingual tech help for seniors, families, and small businesses with a focus on clarity, trust, and useful results.",
  },
  {
    label: "Church Media",
    title: "Live systems where reliability matters.",
    description:
      "Hands-on work with livestream and technical systems that need to function cleanly in real time.",
  },
];

const techBuddyServices = [
  "Device setup",
  "Wi-Fi help",
  "Troubleshooting",
  "Scam support",
];

export default function HomePage() {
  return (
    <>
      <Reveal as="section" className="surface hero-card" delay={40}>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Victor Licona</span>
            <h1>Cybersecurity, systems, and real work that already carries weight.</h1>
            <p className="hero-lead">
              I am building a future around cybersecurity, technology, and entrepreneurship with a
              brand that feels clean, serious, and earned.
            </p>

            <div className="hero-actions">
              <Link className="button" to="/experience">
                View Work
              </Link>
              <Link className="button-secondary" to="/about">
                About
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
            <div className="note-card">
              <span className="section-label">Current Focus</span>
              <h2>Security first. Business-minded. Built for trust.</h2>
              <p>
                The goal is simple: build technical depth, solve real problems, and grow a brand
                that feels credible from the first impression.
              </p>
            </div>
          </aside>
        </div>
      </Reveal>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={80}>
          <span className="section-label">About</span>
          <h2>Young, but already operating.</h2>
          <p className="body-copy">
            I am from Fort Worth, Texas and I am building around cybersecurity, technical problem
            solving, and business. I care about work that feels sharp, useful, and trustworthy.
          </p>
        </Reveal>

        <Reveal as="article" className="surface section-panel" delay={130}>
          <span className="section-label">Why It Works</span>
          <div className="signal-list">
            <div>
              <strong>Real people.</strong>
              <p>Not just theory or student projects.</p>
            </div>
            <div>
              <strong>Real systems.</strong>
              <p>Support, media, setup, and execution.</p>
            </div>
            <div>
              <strong>Real ambition.</strong>
              <p>Cybersecurity with long-term founder vision.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={100}>
          <span className="eyebrow">Focus</span>
          <h2>Three things at the center of the brand.</h2>
        </Reveal>

        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <Reveal
              key={area.title}
              as="article"
              className="surface focus-card"
              delay={130 + index * 50}
            >
              <span className="kicker">{area.label}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={130}>
          <span className="eyebrow">Selected Work</span>
          <h2>Enough proof to show the direction.</h2>
        </Reveal>

        <div className="project-grid">
          {featuredWork.map((item, index) => (
            <Reveal
              key={item.label}
              as="article"
              className="surface project-card"
              delay={160 + index * 60}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface techbuddy-band" delay={190}>
        <div className="band-copy">
          <span className="section-label">TechBuddy by Victor</span>
          <h2>Local tech support with a cleaner, calmer approach.</h2>
          <p>
            Built for seniors, families, and small businesses who need clear help, not more
            confusion.
          </p>
        </div>

        <div className="chip-row">
          {techBuddyServices.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="surface cta-band" delay={220}>
        <span className="section-label">Next Step</span>
        <h2>Explore the work or start the conversation.</h2>
        <div className="hero-actions">
          <Link className="button" to="/experience">
            Work
          </Link>
          <Link className="button-secondary" to="/contact">
            Contact
          </Link>
        </div>
      </Reveal>
    </>
  );
}
