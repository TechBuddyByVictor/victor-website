import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const audiences = ["Seniors", "Families", "Small businesses", "Anyone who wants clear, practical tech help"];

const services = [
  "Device setup",
  "Wi-Fi and connectivity help",
  "Computer and phone support",
  "Troubleshooting",
  "Scam awareness and basic digital safety",
  "Small business tech help",
];

const trustPoints = [
  {
    label: "Clear Help",
    copy: "Support that feels understandable, calm, and easy to follow.",
  },
  {
    label: "Real Trust",
    copy: "Built around helping people feel confident instead of overwhelmed.",
  },
  {
    label: "Practical Support",
    copy: "Focused on solving the problem the right way, not overcomplicating it.",
  },
];

export default function TechBuddyPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero page-hero-techbuddy" delay={40}>
        <span className="eyebrow">TechBuddy by Victor</span>
        <h1>Local tech support built to feel clear, calm, and dependable.</h1>
        <p>
          TechBuddy by Victor helps seniors, families, and small businesses get practical support
          with the technology they rely on every day.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/contact">
            Contact TechBuddy
          </Link>
          <a className="button-secondary" href="tel:8174704724">
            Get Help
          </a>
        </div>
      </Reveal>

      <section className="split-grid split-grid-service">
        <Reveal as="article" className="surface section-panel service-story" delay={90}>
          <span className="section-label">What It Is</span>
          <h2>A real local service, clearly positioned.</h2>
          <div className="signal-list">
            <p>
              I created TechBuddy by Victor to make technology easier and less stressful for the
              people who depend on it.
            </p>
            <p>
              That includes phones, computers, device setup, Wi-Fi help, troubleshooting, scam
              awareness, and everyday digital issues.
            </p>
          </div>
        </Reveal>

        <Reveal as="article" className="surface section-panel audience-panel" delay={130}>
          <span className="section-label">Who It Helps</span>
          <ul className="list">
            {audiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={160}>
          <span className="eyebrow">Services</span>
          <h2>Practical support across the problems people actually run into.</h2>
        </Reveal>

        <div className="focus-grid service-grid">
          {services.map((service, index) => (
            <Reveal
              key={service}
              as="article"
              className="surface focus-card service-card"
              delay={190 + index * 30}
            >
              <span className="kicker">Service</span>
              <h3>{service}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface section-panel trust-panel" delay={220}>
        <span className="section-label">Why It Works</span>
        <div className="highlights-row">
          {trustPoints.map((item) => (
            <article key={item.label} className="highlight-item">
              <strong>{item.label}</strong>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </>
  );
}
