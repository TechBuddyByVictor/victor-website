import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const projects = [
  {
    label: "TechBuddy by Victor",
    title: "A local tech support business with real-world credibility.",
    description:
      "Built around trust, practical help, and a service experience that feels professional from the start.",
  },
  {
    label: "Church Media",
    title: "Live systems where reliability matters.",
    description:
      "Hands-on work with livestream and technical systems that need to function cleanly in real time.",
  },
  {
    label: "Brand and Web",
    title: "A cleaner digital presence with stronger standards.",
    description:
      "Personal branding and web direction built to match the seriousness of the work behind it.",
  },
];

const specialties = [
  "Cybersecurity mindset",
  "Technical support",
  "Wi-Fi and device setup",
  "Livestream systems",
  "Clear communication",
  "Founder-minded execution",
];

export default function ExperiencePage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">Work</span>
        <h1>Projects, systems, and proof.</h1>
        <p>A cleaner look at the work that is already shaping the brand.</p>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Featured</span>
          <h2>The work that carries the most weight right now.</h2>
        </Reveal>

        <div className="project-grid project-grid-wide">
          {projects.map((project, index) => (
            <Reveal
              key={project.label}
              as="article"
              className="surface project-card"
              delay={120 + index * 50}
            >
              <span className="kicker">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface section-panel" delay={180}>
        <span className="section-label">Specialties</span>
        <div className="chip-row">
          {specialties.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="surface cta-band" delay={220}>
        <span className="section-label">Next Step</span>
        <h2>Want the business side too?</h2>
        <div className="hero-actions">
          <Link className="button" to="/techbuddy">
            TechBuddy
          </Link>
          <Link className="button-secondary" to="/contact">
            Contact
          </Link>
        </div>
      </Reveal>
    </>
  );
}
