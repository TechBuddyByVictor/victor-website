import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <section className="panel page-hero">
        <span className="eyebrow">About Me</span>
        <h1>More than a resume, less formal than LinkedIn.</h1>
        <p>
          This page is where I can be more personal about my values, personality, and direction.
          It helps visitors understand not just what I do, but how I think and what I care about.
        </p>
      </section>

      <section className="story-grid">
        <article className="panel section-panel story-block">
          <span className="kicker">Who I Am</span>
          <strong>A thoughtful builder in progress</strong>
          <p>
            I'm creating a space that reflects my identity, my growth, and the kind of future I'm
            working toward. This can become a strong written intro once your real bio is added.
          </p>
        </article>
        <article className="panel section-panel story-block">
          <span className="kicker">What Matters</span>
          <strong>Growth, communication, and consistency</strong>
          <p>
            I want my website to feel polished without sounding distant. The goal is to come across
            as professional, approachable, and real.
          </p>
        </article>
      </section>

      <section className="panel section-panel">
        <span className="section-label">Strengths</span>
        <h2>What people should understand quickly.</h2>
        <ul className="list">
          <li>I care about presenting myself clearly and intentionally.</li>
          <li>I want a digital space that can grow with my experience and future goals.</li>
          <li>I value a clean, memorable presence that feels human instead of corporate.</li>
        </ul>
        <div className="inline-actions">
          <Link className="button" to="/experience">
            View Experience
          </Link>
          <Link className="button-secondary" to="/contact">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
