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

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={90}>
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

        <Reveal as="article" className="surface section-panel contact-form-panel" delay={130}>
          <span className="section-label">Inquiry Form</span>
          <h2>A clean place to start the conversation.</h2>
          <form id="contact-form" className="contact-form">
            <label className="field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" placeholder="your@email.com" />
            </label>
            <label className="field field-full">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="What are you reaching out about?"
              />
            </label>
            <div className="form-actions">
              <button type="submit" className="button">
                Send Inquiry
              </button>
              <Link className="button-secondary" to="/contact#resume-request">
                Resume
              </Link>
            </div>
            <p className="form-note">Connect this form to your preferred inbox before launch.</p>
          </form>
        </Reveal>
      </section>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={165}>
          <span className="section-label">Best For</span>
          <ul className="list">
            <li>Cybersecurity and technical opportunities</li>
            <li>TechBuddy business inquiries</li>
            <li>Collaborations that value trust and execution</li>
          </ul>
        </Reveal>

        <Reveal
          as="article"
          id="resume-request"
          className="surface cta-band resume-panel"
          delay={200}
        >
          <span className="section-label">Resume</span>
          <h2>Resume available on request.</h2>
          <p>Use this button as the polished resume call-to-action until you add the final file.</p>
          <div className="hero-actions">
            <Link className="button" to="/contact#contact-form">
              Request Resume
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
