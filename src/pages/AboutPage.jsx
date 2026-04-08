import { Link } from "react-router-dom";

const traits = [
  {
    label: "Presence",
    title: "Composed, direct, and intentional",
    description:
      "I want people to read my work the same way they read my style: clean, confident, and built with purpose.",
  },
  {
    label: "Mindset",
    title: "Always building upward",
    description:
      "Whether the focus is cybersecurity, business, or communication, I care about steady progress and stronger standards.",
  },
  {
    label: "Style",
    title: "Minimal, but not forgettable",
    description:
      "The goal is not to look loud. It is to look polished enough that the simplicity feels deliberate.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="surface page-hero section-reveal">
        <span className="eyebrow">About</span>
        <h1>Calm presence. High standards. Long-term growth.</h1>
        <p>
          This page gives a more personal read on who I am. It is less about listing credentials
          and more about showing the kind of energy, discipline, and direction I bring to the
          table.
        </p>
      </section>

      <section className="feature-grid compact-grid">
        {traits.map((trait) => (
          <article key={trait.title} className="surface story-card section-reveal">
            <span className="kicker">{trait.label}</span>
            <h2>{trait.title}</h2>
            <p>{trait.description}</p>
          </article>
        ))}
      </section>

      <section className="split-grid">
        <article className="surface section-panel section-reveal">
          <span className="section-label">Core Principles</span>
          <h2>How I want people to understand me quickly.</h2>
          <ul className="list">
            <li>I respect clean systems, clear communication, and work that feels well put together.</li>
            <li>I want a presence that feels mature, masculine, and credible without trying too hard.</li>
            <li>I value consistency because it compounds into trust, confidence, and better opportunities.</li>
          </ul>
        </article>

        <article className="surface section-panel section-reveal">
          <span className="section-label">Direction</span>
          <h2>Built for more than one chapter.</h2>
          <p className="body-copy">
            This site is designed to grow with me. Today it presents the foundation. Over time it
            can hold stronger experience, better projects, and a clearer record of what I know how
            to build.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/experience">
              View Experience
            </Link>
            <Link className="button-secondary" to="/contact">
              Contact Me
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
