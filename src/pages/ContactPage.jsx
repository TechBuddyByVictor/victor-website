import React from "react";
import Reveal from "../components/Reveal";

const contactItems = [
  {
    label: "Email",
    value: "contact@victorlicona.com",
    href: "mailto:contact@victorlicona.com",
  },
  {
    label: "TechBuddy",
    value: "817-470-4724",
    href: "tel:8174704724",
  },
  {
    label: "LinkedIn",
    value: "victorlicona",
    href: "https://www.linkedin.com/in/victorlicona/",
  },
];

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const message = (formData.get("message") ?? "").toString().trim();

    const subject = `Website inquiry from ${name || "Visitor"}`;
    const body = [
      ...(name ? [`Name: ${name}`] : []),
      ...(email ? [`Email: ${email}`] : []),
      "",
      message || "Hi Victor,",
    ].join("\n");

    window.location.href = `mailto:contact@victorlicona.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Reveal as="section" className="page-hero page-hero-contact contact-hero" delay={40}>
        <div className="contact-hero-copy">
          <span className="eyebrow">Contact</span>
          <h1>Let&apos;s make the next step clear.</h1>
          <p className="hero-copyline">
            Reach out for TechBuddy help, a project conversation, or a direct connection with
            Victor.
          </p>
          <div className="hero-actions contact-hero-actions">
            <a className="button" href="#contact-form">
              Start a Message
            </a>
            <a className="button-secondary" href="tel:8174704724">
              Call TechBuddy
            </a>
          </div>
        </div>

        <aside className="contact-hero-panel" aria-label="Contact details">
          <div className="contact-hero-panel-head">
            <span>Open</span>
            <strong>Direct Contact</strong>
          </div>
          <p>TechBuddy help, project notes, and professional connections.</p>
          <div className="contact-hero-signal" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="contact-hero-channels">
            {contactItems.map((item) => (
              <a
                key={item.label}
                className="contact-hero-channel"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </aside>
      </Reveal>

      <section className="contact-layout">
        <Reveal as="article" className="editorial-panel editorial-panel-story" delay={90}>
          <span className="section-label">Direct</span>
          <h2>Connect directly.</h2>
          <div className="contact-list">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-row">
                <small>{item.label}</small>
                {item.href ? (
                  <a
                    className="contact-link"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="article" className="form-panel form-panel-emphasis" delay={130}>
          <span className="section-label">Message</span>
          <h2>Start the conversation.</h2>
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="field field-full">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="What are you reaching out about?"
                required
              />
            </label>
            <div className="form-actions">
              <button type="submit" className="button">
                Let's Connect
              </button>
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
}
