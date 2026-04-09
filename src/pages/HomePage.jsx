import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const entryLinks = [
  {
    to: "/about",
    label: "About",
    title: "Who I am and what I am building.",
  },
  {
    to: "/experience",
    label: "Work",
    title: "Projects, systems, and technical proof.",
  },
  {
    to: "/techbuddy",
    label: "TechBuddy",
    title: "A local business built around trust and clarity.",
  },
];

const focusItems = ["Cybersecurity", "TechBuddy by Victor", "Digital systems"];

export default function HomePage() {
  return (
    <>
      <Reveal as="section" className="page-hero hero-home" delay={40}>
        <span className="eyebrow">Victor Licona</span>
        <h1>Cybersecurity, technology, and entrepreneurship with a cleaner point of view.</h1>
        <p className="hero-copyline">
          I build systems, solve technical problems, and create work that feels useful, modern,
          and intentional.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/experience">
            View Work
          </Link>
          <Link className="button-secondary" to="/about">
            About
          </Link>
          <Link className="button-secondary" to="/contact">
            Contact
          </Link>
        </div>
      </Reveal>

      <section className="page-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Start Here</span>
          <h2>The site, split into clear pages.</h2>
        </Reveal>

        <div className="entry-grid">
          {entryLinks.map((item, index) => (
            <Reveal
              key={item.to}
              as={Link}
              to={item.to}
              className="entry-link"
              delay={120 + index * 40}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="focus-strip" delay={170}>
        <span className="section-label">Current Focus</span>
        <div className="chip-row">
          {focusItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Reveal>
    </>
  );
}
