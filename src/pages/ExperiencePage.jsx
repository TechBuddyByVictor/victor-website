import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const projects = [
  {
    label: "Business",
    title: "TechBuddy by Victor",
    description:
      "A local tech support business serving seniors, families, and small businesses with calm, practical, trustworthy help.",
    points: [
      "Built around service, clarity, and real-world problem solving",
      "Positions technology help as something professional and approachable",
      "Shows founder ownership, operational thinking, and execution",
    ],
  },
  {
    label: "Media Systems",
    title: "Church livestream and technical support",
    description:
      "Experience supporting live systems where smooth delivery matters and people immediately feel the difference when something breaks.",
    points: [
      "Hands-on coordination around media and technical environments",
      "Troubleshooting with real pressure and real users involved",
      "A blend of technical reliability and people-facing responsibility",
    ],
  },
  {
    label: "Brand Build",
    title: "Digital presence and web direction",
    description:
      "Building a personal site and broader digital identity that match the ambition behind the work instead of underselling it.",
    points: [
      "Premium presentation with clear positioning",
      "Stronger personal branding for employers, colleges, and collaborators",
      "A platform designed to scale with future proof, projects, and business growth",
    ],
  },
  {
    label: "Technical Support",
    title: "Problem solving people can actually feel",
    description:
      "Helping users with devices, setup, troubleshooting, and digital confusion in a way that builds trust instead of friction.",
    points: [
      "Translating technical issues into clear next steps",
      "Supporting people who need confidence, not just instructions",
      "Treating service quality as part of technical quality",
    ],
  },
];

const specialties = [
  "Cybersecurity direction and security mindset",
  "Technical troubleshooting and support",
  "Wi-Fi, devices, setup, and system cleanup",
  "Livestream and church media systems",
  "Entrepreneurship and service operations",
  "Clear communication with real users",
];

const workSignals = [
  {
    title: "I work where failure is visible",
    description:
      "Live systems, support situations, and local business work do not leave much room for hiding behind theory.",
  },
  {
    title: "I care about professional presentation",
    description:
      "How something feels matters. Trust is built through quality, calm, and details that look intentional.",
  },
  {
    title: "I am building beyond one role",
    description:
      "The long-term path includes cybersecurity, leadership, operations, and business creation, not only a narrow title.",
  },
];

const timelineItems = [
  {
    time: "Now",
    title: "Growing the technical base",
    description:
      "Sharpening cybersecurity knowledge, systems thinking, and hands-on experience that can carry long term.",
  },
  {
    time: "In motion",
    title: "Building business credibility",
    description:
      "TechBuddy gives the founder side of the brand something real to stand on right now.",
  },
  {
    time: "Next layer",
    title: "Adding stronger proof and sharper case studies",
    description:
      "As projects expand, this site becomes a stronger record of results, capability, and momentum.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">Work and Experience</span>
        <h1>Proof matters. So does how you carry it.</h1>
        <p>
          This page is built to show real work, real context, and real direction. It reflects what
          I am already doing now while leaving room for stronger case studies, certifications, and
          larger technical wins over time.
        </p>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Featured Projects</span>
          <h2>What already gives this brand credibility.</h2>
          <p>
            These are the experiences that show I am not just interested in tech. I already work in
            spaces where systems, trust, and execution actually matter.
          </p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              as="article"
              className="surface project-card"
              delay={130 + index * 60}
            >
              <span className="kicker">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="list compact-list">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={180}>
          <span className="section-label">Specialties</span>
          <h2>The kind of work I want to keep being known for.</h2>
          <div className="service-grid">
            {specialties.map((item) => (
              <div key={item} className="service-chip">
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="article" className="surface section-panel" delay={230}>
          <span className="section-label">What This Experience Says</span>
          <div className="signal-list">
            {workSignals.map((signal) => (
              <div key={signal.title}>
                <strong>{signal.title}</strong>
                <p>{signal.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="surface section-panel" delay={270}>
        <span className="section-label">Momentum</span>
        <h2>Where the work is heading next.</h2>
        <div className="timeline">
          {timelineItems.map((item) => (
            <div key={item.title} className="timeline-item">
              <small>{item.time}</small>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="surface cta-band" delay={310}>
        <span className="section-label">Serious Inquiries</span>
        <h2>If the work matters, I want the conversation.</h2>
        <p>
          I am interested in opportunities, collaborations, internships, and projects where
          technical ability, trust, and execution all matter.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/contact">
            Contact
          </Link>
          <Link className="button-secondary" to="/about">
            More About Me
          </Link>
        </div>
      </Reveal>
    </>
  );
}
