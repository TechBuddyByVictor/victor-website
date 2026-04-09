import Reveal from "../components/Reveal";

const projects = [
  {
    label: "TechBuddy by Victor",
    description:
      "A local tech support business focused on helping seniors, families, and small businesses with devices, setup, troubleshooting, Wi-Fi, scams, and everyday technology problems.",
  },
  {
    label: "Church Media & Livestream Systems",
    description:
      "Hands-on experience supporting media, livestreaming, and digital systems in a real operating environment. This includes working with production workflows, technical reliability, and making sure systems run smoothly for people depending on them.",
  },
  {
    label: "Personal Brand & Website Development",
    description:
      "Building and refining my own digital presence through modern web design, branding, and user experience. Focused on creating a clean, premium, and professional online identity.",
  },
  {
    label: "Technical Problem Solving",
    description:
      "From devices and networks to digital tools and system setup, I enjoy figuring out what's wrong, improving how things work, and creating better experiences through technology.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">Work</span>
        <h1>Work &amp; Experience</h1>
        <p>
          A selection of the work, projects, and systems I've been building across technology,
          business, and digital operations.
        </p>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Selected Work</span>
          <h2>Real work across systems, support, and digital execution.</h2>
        </Reveal>

        <div className="project-grid project-grid-wide">
          {projects.map((project, index) => (
            <Reveal
              key={project.label}
              as="article"
              className="surface project-card"
              delay={120 + index * 45}
            >
              <span className="kicker">{project.label}</span>
              <p>{project.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface cta-band" delay={190}>
        <span className="section-label">Closing Note</span>
        <p>
          I'm still early in my journey, but I'm already focused on doing real work, building real
          systems, and creating a strong foundation for what comes next.
        </p>
      </Reveal>
    </>
  );
}
