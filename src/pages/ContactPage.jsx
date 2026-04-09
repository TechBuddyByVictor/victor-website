import Reveal from "../components/Reveal";

const primaryContacts = [
  {
    label: "Email",
    value: "contact@victorlicona.com",
    href: "mailto:contact@victorlicona.com",
    note: "Best for projects, opportunities, and direct outreach.",
  },
  {
    label: "TechBuddy",
    value: "8174704724",
    href: "tel:8174704724",
    note: "Best for local support and service questions.",
  },
];

const secondaryContacts = [
  {
    label: "LinkedIn",
    value: "victorlicona",
    href: "https://www.linkedin.com/in/victorlicona/",
  },
  {
    label: "GitHub",
    value: "Link coming soon",
  },
];

export default function ContactPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero page-hero-contact" delay={40}>
        <span className="eyebrow">Contact</span>
        <h1>Contact</h1>
        <p>Whether you want to connect, collaborate, or ask about TechBuddy, feel free to reach out.</p>
      </Reveal>

      <section className="split-grid split-grid-contact">
        <Reveal as="article" className="surface section-panel contact-panel-primary" delay={90}>
          <span className="section-label">Direct Contact</span>
          <h2>The clearest way to reach me.</h2>
          <div className="contact-stack">
            {primaryContacts.map((item) => (
              <article key={item.label} className="detail-card detail-card-strong">
                <span className="kicker">{item.label}</span>
                <a
                  className="detail-link"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <strong>{item.value}</strong>
                </a>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="article" className="surface section-panel contact-form-panel" delay={130}>
          <span className="section-label">Send a Message</span>
          <h2>Let's connect.</h2>
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
              <textarea name="message" rows="5" placeholder="What are you reaching out about?" />
            </label>
            <div className="form-actions">
              <button type="submit" className="button">
                Send Message
              </button>
            </div>
          </form>
        </Reveal>
      </section>

      <Reveal as="section" className="surface section-panel contact-secondary-panel" delay={180}>
        <span className="section-label">Other Links</span>
        <div className="detail-grid detail-grid-secondary">
          {secondaryContacts.map((item) => (
            <article key={item.label} className="detail-card">
              <span className="kicker">{item.label}</span>
              {item.href ? (
                <a className="detail-link" href={item.href} target="_blank" rel="noreferrer">
                  <strong>{item.value}</strong>
                </a>
              ) : (
                <strong>{item.value}</strong>
              )}
            </article>
          ))}
        </div>
      </Reveal>
    </>
  );
}
