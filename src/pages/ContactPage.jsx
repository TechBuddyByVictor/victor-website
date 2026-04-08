import { Link } from "react-router-dom";

const contactItems = [
  {
    label: "Email",
    value: "your@email.com",
    note: "Best for direct conversations",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-handle",
    note: "Professional network and updates",
  },
  {
    label: "GitHub",
    value: "github.com/your-handle",
    note: "Projects, code, and technical work",
  },
  {
    label: "Resume",
    value: "Add your PDF or hosted link",
    note: "Fast access for employers and clients",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="surface page-hero section-reveal">
        <span className="eyebrow">Contact</span>
        <h1>Keep the connection simple and professional.</h1>
        <p>
          This section is designed to feel clean and easy to use. Replace the placeholders below
          with your real details when you are ready to publish.
        </p>
      </section>

      <section className="contact-grid">
        <article className="surface section-panel section-reveal">
          <span className="section-label">Contact Details</span>
          <h2>Place your real channels here.</h2>
          <p className="body-copy">
            A tight set of links feels stronger than adding every platform. Lead with the places
            you actually want people to use.
          </p>

          <div className="detail-grid">
            {contactItems.map((item) => (
              <article key={item.label} className="detail-card">
                <span className="kicker">{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="surface section-panel section-reveal">
          <span className="section-label">Availability</span>
          <h2>Open to serious conversations and smart opportunities.</h2>
          <p className="body-copy">
            This area can hold a short line about the kinds of roles, projects, or collaborations
            you want to attract. Keep it clear, direct, and easy to trust.
          </p>
          <ul className="list">
            <li>Internships, entry-level roles, or freelance work in technical spaces.</li>
            <li>Entrepreneurial collaborations where execution and presentation both matter.</li>
            <li>Connections that value discipline, curiosity, and long-term growth.</li>
          </ul>
          <div className="hero-actions">
            <Link className="button" to="/">
              Back Home
            </Link>
            <Link className="button-secondary" to="/experience">
              View Experience
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
