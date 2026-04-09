import Reveal from "../components/Reveal";

const contactItems = [
  {
    label: "Email",
    value: "contact@victorlicona.com",
    href: "mailto:contact@victorlicona.com",
  },
  {
    label: "GitHub",
    value: "Placeholder link coming soon",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/victorlicona/",
    href: "https://www.linkedin.com/in/victorlicona/",
  },
  {
    label: "TechBuddy",
    value: "8174704724",
    href: "tel:8174704724",
  },
];

export default function ContactPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">Contact</span>
        <h1>Contact</h1>
        <p>
          Whether you want to connect, collaborate, ask about a project, or reach out about
          TechBuddy, feel free to get in touch.
        </p>
      </Reveal>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={90}>
          <span className="section-label">Contact Details</span>
          <div className="detail-grid detail-grid-compact">
            {contactItems.map((item) => (
              <article key={item.label} className="detail-card">
                <span className="kicker">{item.label}</span>
                {item.href ? (
                  <a
                    className="detail-link"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <strong>{item.value}</strong>
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="article" className="surface section-panel contact-form-panel" delay={130}>
          <span className="section-label">Send a Message</span>
          <h2>Let&apos;s connect.</h2>
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
              <textarea name="message" rows="5" placeholder="Your message" />
            </label>
            <div className="form-actions">
              <button type="submit" className="button">
                Let&apos;s connect.
              </button>
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
}
