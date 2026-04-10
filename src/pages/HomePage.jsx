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
const heroLayerItems = [
  { label: "Based In", value: "Fort Worth, Texas" },
  { label: "Focused On", value: "Cybersecurity and digital systems" },
  { label: "Building", value: "TechBuddy by Victor" },
];
const portraitSrc = "/victor-portrait.jpg";

export default function HomePage() {
  return (
    <>
      <Reveal as="section" className="page-hero hero-home hero-home-signature" delay={40}>
        <div className="hero-editorial">
          <div className="hero-topline">
            <span className="eyebrow">Victor Licona</span>
            <span className="hero-topline-note">Fort Worth, Texas</span>
          </div>

          <div className="hero-editorial-body">
            <div className="hero-copy-column">
              <h1>Building systems, solving problems, and moving toward cybersecurity.</h1>
              <p className="hero-copyline">
                Fort Worth builder focused on cybersecurity, technology, entrepreneurship, and
                practical systems that help people move forward.
              </p>
            </div>

            <div className="hero-visual-column">
              <PortraitFrame
                className="hero-portrait-feature"
                src={portraitSrc}
                alt="Victor Licona portrait"
                eyebrow="Victor Licona"
                title="Victor Licona"
                caption="Fort Worth, Texas"
              />

              <div className="hero-visual-note">
                <span className="kicker">Current Direction</span>
                <p>Cybersecurity, systems, and founder-minded execution built through real work.</p>
              </div>
            </div>
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

          <div className="hero-layer" aria-label="Hero highlights">
            {heroLayerItems.map((item) => (
              <div key={item.label} className="hero-layer-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
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
