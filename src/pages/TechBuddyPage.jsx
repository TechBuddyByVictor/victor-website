import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const services = [
  "Device setup",
  "Wi-Fi help",
  "Computer and phone support",
  "Troubleshooting",
  "Scam awareness and digital safety",
  "Small business tech help",
];

export default function TechBuddyPage() {
  return (
    <>
      <Reveal as="section" className="page-hero page-hero-techbuddy page-hero-service" delay={40}>
        <span className="eyebrow">TechBuddy by Victor</span>
        <h1>Local tech support built to feel clear, trustworthy, and practical.</h1>
        <p className="hero-copyline">
          TechBuddy by Victor helps seniors, families, and small businesses with the technology
          they rely on every day.
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

      <section className="service-layout">
        <Reveal as="article" className="editorial-panel editorial-panel-story" delay={90}>
          <span className="section-label">Overview</span>
          <h2>Technology support that feels simpler, clearer, and more human.</h2>
          <p>
            I built TechBuddy by Victor to help people get real support with the devices, systems,
            and everyday technology they depend on.
          </p>
          <p>
            It is designed for seniors, families, and small businesses who want trustworthy help
            without confusion, pressure, or unnecessary complexity.
          </p>
        </Reveal>

        <Reveal as="article" className="facts-panel facts-panel-compact" delay={130}>
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
            <div className="fact-row">
              <strong>Anyone who wants clear, practical tech help</strong>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal as="div" className="section-heading" delay={170}>
          <span className="eyebrow">Services</span>
          <h2>Support for the issues people actually run into.</h2>
        </Reveal>

        <div className="minimal-grid">
          {services.map((service, index) => (
            <Reveal key={service} as="article" className="line-card" delay={200 + index * 30}>
              <p>{service}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="statement-strip statement-strip-service" delay={225}>
        <span className="section-label">TechBuddy</span>
        <p>Built around trust, clarity, and practical problem solving.</p>
      </Reveal>
    </>
  );
}
