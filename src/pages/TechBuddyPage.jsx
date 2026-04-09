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

export default function TechBuddyPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">TechBuddy</span>
        <h1>TechBuddy by Victor</h1>
        <p>
          TechBuddy by Victor is a local tech support service built to make technology easier,
          clearer, and less stressful for everyday people.
        </p>
      </Reveal>

      <Reveal as="section" className="surface section-panel" delay={90}>
        <span className="section-label">Overview</span>
        <div className="signal-list">
          <p>
            I created TechBuddy by Victor to help seniors, families, and small businesses get real
            support with the technology they rely on. That includes phones, computers, device
            setup, Wi-Fi help, scam awareness, troubleshooting, and everyday digital issues.
          </p>
          <p>
            The goal is simple: provide helpful, trustworthy support in a way that feels clear and
            approachable. Technology should be useful - not overwhelming.
          </p>
        </div>
      </Reveal>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={130}>
          <span className="section-label">Who It Helps</span>
          <ul className="list">
            {audiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="article" className="surface section-panel" delay={165}>
          <span className="section-label">Services</span>
          <div className="chip-row">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="surface cta-band" delay={205}>
        <span className="section-label">TechBuddy</span>
        <p>TechBuddy is built around trust, clarity, and solving problems the right way.</p>
        <div className="hero-actions">
          <Link className="button" to="/contact">
            Contact TechBuddy
          </Link>
          <Link className="button-secondary" to="/contact#contact-form">
            Get Help
          </Link>
        </div>
      </Reveal>
    </>
  );
}
