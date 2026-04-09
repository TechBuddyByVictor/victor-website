import Reveal from "../components/Reveal";

const contactItems = [
  {
    label: "Email",
    value: "contact@victorlicona.com",
    href: "mailto:contact@victorlicona.com",
  },
  {
    label: "TechBuddy",
    value: "8174704724",
    href: "tel:8174704724",
  },
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
      <Reveal as="section" className="page-hero page-hero-contact" delay={40}>
        <span className="eyebrow">Contact</span>
        <h1>Contact</h1>
        <p className="hero-copyline">
          Whether you want to connect, collaborate, or ask about TechBuddy, reach out.
        </p>
      </Reveal>

      <section className="contact-layout">
        <Reveal as="article" className="editorial-panel" delay={90}>
          <span className="section-label">Direct</span>
          <h2>The clearest way to reach me.</h2>
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

        <Reveal as="article" className="form-panel" delay={130}>
          <span className="section-label">Message</span>
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
    </>
  );
}
