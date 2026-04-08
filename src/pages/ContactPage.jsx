import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <>
      <section className="panel page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Let's make it easy to reach me.</h1>
        <p>
          This page gives people a dedicated place to contact you, follow your work, or connect on
          professional platforms without cluttering the rest of the site.
        </p>
      </section>

      <section className="contact-grid">
        <article className="panel contact-panel">
          <span className="section-label">Reach Out</span>
          <h2>Use your real details here.</h2>
          <p>
            Replace these placeholders with your email, LinkedIn, GitHub, resume link, or anything
            else you want visitors to use.
          </p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:you@example.com">
              <strong>Email</strong>
              <span>you@example.com</span>
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>LinkedIn</strong>
              <span>View profile</span>
            </a>
            <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer">
              <strong>GitHub</strong>
              <span>See work</span>
            </a>
          </div>
        </article>

        <article className="panel contact-panel story-block">
          <span className="kicker">Availability</span>
          <strong>Open to conversations and opportunities</strong>
          <p>
            You can use this area for a short message about what kind of roles, collaborations, or
            connections you're currently looking for.
          </p>
          <div className="inline-actions">
            <a className="button" href="mailto:you@example.com">
              Send Email
            </a>
            <Link className="button-secondary" to="/">
              Back Home
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
