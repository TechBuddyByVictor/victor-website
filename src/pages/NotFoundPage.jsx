import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="surface page-hero section-reveal not-found">
      <span className="eyebrow">404</span>
      <h1>That page is off the grid.</h1>
      <p>The route is not here, but the rest of the site is ready to explore.</p>
      <div className="hero-actions">
        <Link className="button" to="/">
          Back Home
        </Link>
        <Link className="button-secondary" to="/contact">
          Contact
        </Link>
      </div>
    </section>
  );
}
