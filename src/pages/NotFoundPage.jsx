import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="panel page-hero not-found">
      <span className="eyebrow">404</span>
      <h1>This page wandered off.</h1>
      <p>The route exists in Cloudflare Pages now, but this specific page does not.</p>
      <div className="inline-actions">
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
