import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function NotFoundPage() {
  return (
    <Reveal as="section" className="surface page-hero not-found" delay={40}>
      <span className="eyebrow">404</span>
      <h1>That page is not part of the build.</h1>
      <p>
        The route is missing, but the main site is here and ready to explore with the full premium
        experience intact.
      </p>
      <div className="hero-actions">
        <Link className="button" to="/">
          Back Home
        </Link>
        <Link className="button-secondary" to="/contact">
          Contact
        </Link>
      </div>
    </Reveal>
  );
}
