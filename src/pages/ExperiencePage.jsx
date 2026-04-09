import Reveal from "../components/Reveal";

const workItems = [
  {
    label: "TechBuddy by Victor",
    title: "A local business with real-world weight.",
    description:
      "Tech support for seniors, families, and small businesses across devices, Wi-Fi, troubleshooting, and everyday technology issues.",
    points: ["Business positioning", "Trust-based service", "Problem-solving in the real world"],
    feature: true,
  },
  {
    label: "Church Media",
    title: "Systems that need to work live.",
    description:
      "Hands-on support for media, livestream, and technical systems where reliability matters and people depend on the result.",
    points: ["Livestream workflows", "Technical reliability"],
  },
  {
    label: "Personal Brand",
    title: "Digital presence built with intention.",
    description:
      "Developing a cleaner, more professional online identity through design, structure, and user experience.",
    points: ["Web design", "Brand direction"],
  },
  {
    label: "Technical Problem Solving",
    title: "Finding what is wrong and making it better.",
    description:
      "From devices and networks to setup and digital tools, I enjoy improving how technology works for the people using it.",
    points: ["Support mindset", "System improvement"],
  },
];

const capabilityItems = ["Cybersecurity mindset", "Systems thinking", "Technical support", "Digital execution"];

export default function ExperiencePage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero page-hero-work" delay={40}>
        <span className="eyebrow">Work</span>
        <h1>Work &amp; Experience</h1>
        <p>A focused look at the projects, systems, and work shaping the brand.</p>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Selected Work</span>
          <h2>Credibility comes from real execution.</h2>
        </Reveal>

        <div className="project-grid project-grid-proof">
          {workItems.map((item, index) => (
            <Reveal
              key={item.label}
              as="article"
              className={`surface project-card proof-card${item.feature ? " proof-card-feature" : ""}`}
              delay={120 + index * 40}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="chip-row chip-row-soft">
                {item.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface section-panel capability-panel" delay={195}>
        <span className="section-label">Core Strengths</span>
        <div className="chip-row">
          {capabilityItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="surface cta-band statement-band" delay={225}>
        <span className="section-label">Direction</span>
        <p>Early in the journey, but already building real systems and stronger standards.</p>
      </Reveal>
    </>
  );
}
