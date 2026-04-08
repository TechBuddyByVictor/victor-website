const highlights = [
  {
    label: "Projects",
    title: "Show proof, not just potential",
    description:
      "As you add real work, this section can hold the strongest examples of what you have built and solved.",
  },
  {
    label: "Skills",
    title: "Keep the toolbox focused",
    description:
      "A tight list of technologies, security interests, and strengths will feel stronger than a long unfocused inventory.",
  },
  {
    label: "Future",
    title: "Aim for momentum",
    description:
      "The best experience section shows both what you have done and the direction you are clearly moving toward.",
  },
];

const timelineItems = [
  {
    title: "Technical Foundation",
    time: "Right now",
    description:
      "Building stronger skills in cybersecurity, systems thinking, and disciplined problem solving.",
  },
  {
    title: "Brand and Portfolio",
    time: "Current stage",
    description:
      "Creating a sharper personal presence so the quality of the presentation matches the seriousness of the work.",
  },
  {
    title: "Projects With Weight",
    time: "Next priority",
    description:
      "Adding real case studies, technical wins, and practical builds that make the profile more credible.",
  },
  {
    title: "Long-Term Positioning",
    time: "Always in progress",
    description:
      "Growing into opportunities that reward discipline, initiative, and the ability to build with intention.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <section className="surface page-hero section-reveal">
        <span className="eyebrow">Experience</span>
        <h1>Built on progress, sharpened by consistency.</h1>
        <p>
          This page is where your work history, projects, certifications, and strongest skills can
          eventually live. For now, it sets the tone and structure for a more serious portfolio.
        </p>
      </section>

      <section className="split-grid">
        <article className="surface section-panel section-reveal">
          <span className="section-label">Timeline</span>
          <h2>The path this profile is built around.</h2>
          <div className="timeline">
            {timelineItems.map((item) => (
              <div key={item.title} className="timeline-item">
                <small>{item.time}</small>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="surface section-panel section-reveal">
          <span className="section-label">What To Add Next</span>
          <h2>Turn this into a serious portfolio fast.</h2>
          <ul className="list">
            <li>Add two or three projects with a short summary, stack, and measurable outcome.</li>
            <li>List the tools or security topics you want to be associated with most.</li>
            <li>Include any certifications, coursework, or wins that support your positioning.</li>
          </ul>
        </article>
      </section>

      <section className="feature-grid compact-grid">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="surface story-card section-reveal">
            <span className="kicker">{highlight.label}</span>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
