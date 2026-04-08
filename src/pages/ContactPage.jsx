import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const contactItems = [
  {
    label: "Email",
    value: "Add your email",
    note: "Best for direct opportunities and introductions.",
  },
  {
    label: "LinkedIn",
    value: "Add your LinkedIn",
    note: "For professional networking and updates.",
  },
  {
    label: "GitHub",
    value: "Add your GitHub",
    note: "For code and technical proof.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">Contact</span>
        <h1>Clear, direct, and easy to trust.</h1>
        <p>For serious work, collaborations, or TechBuddy conversations, reach out.</p>
      </Reveal>

      <Reveal as="section" className="surface section-panel" delay={90}>
        <span className="section-label">Contact</span>
        <div className="detail-grid detail-grid-compact">
          {contactItems.map((item) => (
            <article key={item.label} className="detail-card">
              <span className="kicker">{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={140}>
          <span className="section-label">Best For</span>
          <ul className="list">
            <li>Cybersecurity and technical opportunities</li>
            <li>TechBuddy business inquiries</li>
            <li>Collaborations that value trust and execution</li>
          </ul>
        </Reveal>

        <Reveal as="article" className="surface cta-band" delay={180}>
          <span className="section-label">Explore</span>
          <h2>Want more context first?</h2>
          <div className="hero-actions">
            <Link className="button" to="/experience">
              View Work
            </Link>
            <Link className="button-secondary" to="/about">
              About
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
