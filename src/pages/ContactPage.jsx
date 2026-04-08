import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const contactDeck = [
  {
    label: "Base",
    value: "Fort Worth, Texas",
    note: "Built locally with long-term ambition well beyond one city.",
  },
  {
    label: "Best Fit",
    value: "Internships, collaborations, and serious technical work",
    note: "Especially strong when the work involves trust, systems, service, or growth.",
  },
  {
    label: "Business",
    value: "TechBuddy by Victor",
    note: "Bilingual local tech support for seniors, families, and small businesses.",
  },
  {
    label: "Approach",
    value: "Direct, professional, practical",
    note: "I value clear conversations, clean follow-through, and useful outcomes.",
  },
];

const launchChannels = [
  {
    label: "Email",
    value: "Add your preferred email before launch",
    note: "Best for opportunities, client work, and direct introductions.",
  },
  {
    label: "LinkedIn",
    value: "Add your LinkedIn profile",
    note: "For professional networking, updates, and credibility.",
  },
  {
    label: "GitHub",
    value: "Add your GitHub profile",
    note: "For code, technical proof, and project references.",
  },
  {
    label: "Business Line",
    value: "Add your TechBuddy contact method",
    note: "For local support inquiries and client-facing trust.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">Contact</span>
        <h1>Let&apos;s keep it clear, professional, and easy to trust.</h1>
        <p>
          If the opportunity is real, the project matters, or the problem needs someone who can
          think clearly and execute well, I want to hear about it.
        </p>
      </Reveal>

      <section className="contact-grid">
        <Reveal as="article" className="surface section-panel" delay={90}>
          <span className="section-label">Contact Snapshot</span>
          <h2>The kind of conversations this brand is built for.</h2>
          <div className="detail-grid">
            {contactDeck.map((item) => (
              <article key={item.label} className="detail-card">
                <span className="kicker">{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="article" className="surface section-panel" delay={140}>
          <span className="section-label">Best Fit</span>
          <h2>What to reach out about.</h2>
          <ul className="list">
            <li>Cybersecurity, technical support, or systems-focused opportunities.</li>
            <li>TechBuddy by Victor collaborations, referrals, or business conversations.</li>
            <li>Projects where reliability, trust, and communication matter as much as technical skill.</li>
            <li>Colleges, employers, and builders looking for someone with serious long-term upside.</li>
          </ul>
        </Reveal>
      </section>

      <Reveal as="section" className="surface section-panel" delay={190}>
        <span className="section-label">Launch-Ready Contact Slots</span>
        <h2>Plug in your real channels and this page is ready to publish.</h2>
        <div className="detail-grid">
          {launchChannels.map((item) => (
            <article key={item.label} className="detail-card">
              <span className="kicker">{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="surface cta-band" delay={240}>
        <span className="section-label">Next Move</span>
        <h2>Want more context before reaching out?</h2>
        <p>
          The rest of the site shows how I think, what I am building, and why this brand is
          positioned the way it is.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/experience">
            View My Work
          </Link>
          <Link className="button-secondary" to="/about">
            About Me
          </Link>
        </div>
      </Reveal>
    </>
  );
}
