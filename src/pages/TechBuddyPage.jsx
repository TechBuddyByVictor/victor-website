import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const services = [
  "Device setup",
  "Wi-Fi help",
  "Computer and phone support",
  "Troubleshooting",
  "Scam awareness",
  "Small business tech help",
];

export default function TechBuddyPage() {
  return (
    <>
      <Reveal as="section" className="page-hero page-hero-techbuddy" delay={40}>
        <span className="eyebrow">TechBuddy by Victor</span>
        <h1>Local tech support built to feel clear, trustworthy, and easy to work with.</h1>
        <p className="hero-copyline">
          TechBuddy helps seniors, families, and small businesses with the technology they rely on
          every day.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/contact">
            Contact TechBuddy
          </Link>
          <a className="button-secondary" href="tel:8174704724">
            Call
          </a>
        </div>
      </Reveal>

      <section className="service-layout">
        <Reveal as="article" className="editorial-panel" delay={90}>
          <span className="section-label">Overview</span>
          <h2>Practical help without the confusion.</h2>
          <p>
            I created TechBuddy by Victor to make technology easier and less stressful for the
            people who depend on it.
          </p>
          <p>
            The goal is simple: provide support that feels clear, calm, and genuinely helpful.
          </p>
        </Reveal>

        <Reveal as="article" className="facts-panel" delay={130}>
          <span className="section-label">Who It Helps</span>
          <div className="facts-list">
            <div className="fact-row">
              <strong>Seniors</strong>
            </div>
            <div className="fact-row">
              <strong>Families</strong>
            </div>
            <div className="fact-row">
              <strong>Small businesses</strong>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal as="div" className="section-heading" delay={170}>
          <span className="eyebrow">Services</span>
          <h2>Support across the problems people actually run into.</h2>
        </Reveal>

        <div className="minimal-grid">
          {services.map((service, index) => (
            <Reveal key={service} as="article" className="line-card" delay={200 + index * 30}>
              <p>{service}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="statement-strip" delay={225}>
        <span className="section-label">TechBuddy</span>
        <p>Built around trust, clarity, and solving problems the right way.</p>
      </Reveal>
    </>
  );
}
