import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const services = [
  "Device setup",
  "Computer help",
  "Wi-Fi support",
  "Troubleshooting",
  "Scam awareness",
  "Small business tech help",
];

const audiences = [
  {
    label: "Seniors",
    title: "Patient, clear support without confusion.",
  },
  {
    label: "Families",
    title: "Practical help with devices, Wi-Fi, and everyday tech issues.",
  },
  {
    label: "Small Businesses",
    title: "Reliable support for teams that need technology to work cleanly.",
  },
];

export default function TechBuddyPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">TechBuddy by Victor</span>
        <h1>Local tech support with a cleaner, calmer approach.</h1>
        <p>
          TechBuddy helps seniors, families, and small businesses with technology problems in a way
          that feels clear, professional, and easy to trust.
        </p>
      </Reveal>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={90}>
          <span className="section-label">What It Is</span>
          <h2>A real business, not a side label.</h2>
          <p className="body-copy">
            TechBuddy is built around practical help, bilingual support, and service that feels
            calm from the first interaction. The goal is simple: solve the problem without making
            people feel lost.
          </p>
        </Reveal>

        <Reveal as="article" className="surface section-panel" delay={130}>
          <span className="section-label">Services</span>
          <div className="chip-row">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={110}>
          <span className="eyebrow">Who It Helps</span>
          <h2>Built for people who need technology to feel simpler.</h2>
        </Reveal>

        <div className="focus-grid">
          {audiences.map((item, index) => (
            <Reveal
              key={item.label}
              as="article"
              className="surface focus-card"
              delay={140 + index * 50}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface cta-band" delay={190}>
        <span className="section-label">Contact</span>
        <h2>Want to talk about TechBuddy?</h2>
        <div className="hero-actions">
          <Link className="button" to="/contact">
            Contact
          </Link>
          <Link className="button-secondary" to="/experience">
            View Work
          </Link>
        </div>
      </Reveal>
    </>
  );
}
