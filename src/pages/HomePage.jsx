import { Link } from "react-router-dom";
import PortraitFrame from "../components/PortraitFrame";
import Reveal from "../components/Reveal";

const entryLinks = [
  {
    to: "/about",
    label: "About",
    title: "Fort Worth roots, cybersecurity focus, and builder mindset.",
  },
  {
    to: "/experience",
    label: "Work",
    title: "Projects, systems, support work, and technical execution.",
  },
  {
    to: "/techbuddy",
    label: "TechBuddy",
    title: "Local tech support built around trust, clarity, and real help.",
  },
];

const focusItems = ["Cybersecurity", "TechBuddy by Victor", "Real-world systems"];
const portraitSrc = "/victor-portrait.jpg";

export default function HomePage() {
  return (
    <>
      <Reveal as="section" className="page-hero hero-home hero-home-signature" delay={40}>
        <div className="hero-split">
          <div className="hero-main">
            <div className="hero-lead">
              <div className="hero-copylock">
                <span className="eyebrow">Victor Licona</span>
                <h1>Cybersecurity, systems, and real-world problem solving.</h1>
                <p className="hero-copyline">
                  Fort Worth builder focused on technology, entrepreneurship, and work that helps
                  people move forward.
                </p>
              </div>

              <PortraitFrame
                className="hero-portrait"
                src={portraitSrc}
                alt="Victor Licona portrait"
                eyebrow="Victor Licona"
                title="Victor Licona"
                caption="Fort Worth, Texas"
              />
            </div>

            <div className="hero-actions">
              <Link className="button" to="/experience">
                View My Work
              </Link>
              <Link className="button-secondary" to="/about">
                About Me
              </Link>
              <Link className="button-secondary" to="/contact">
                Contact
              </Link>
            </div>
          </div>
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
              className={`entry-link${index === 0 ? " entry-link-feature" : ""}`}
              delay={120 + index * 40}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="focus-strip focus-strip-signature" delay={170}>
        <span className="section-label">Current Focus</span>
        <p>Focused on cybersecurity, better systems, and building work with practical value.</p>
        <div className="chip-row">
          {focusItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Reveal>
    </>
  );
}
