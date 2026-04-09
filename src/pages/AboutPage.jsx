import Reveal from "../components/Reveal";

const profileNotes = [
  {
    label: "Base",
    value: "Fort Worth, Texas",
  },
  {
    label: "Focus",
    value: "Cybersecurity, technology, and entrepreneurship",
  },
  {
    label: "Approach",
    value: "Practical, intentional, and execution-focused",
  },
];

const pillars = [
  {
    label: "Problem Solving",
    description: "I care about practical solutions, not just theory.",
  },
  {
    label: "Execution",
    description: "I like building things that work well in the real world.",
  },
  {
    label: "Growth",
    description: "I am constantly improving my skills in technology, business, and leadership.",
  },
  {
    label: "Vision",
    description: "I am building toward cybersecurity, entrepreneurship, and long-term impact.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero page-hero-about" delay={40}>
        <span className="eyebrow">About</span>
        <h1>About Victor</h1>
        <p>
          A student from Fort Worth, Texas, building at the intersection of cybersecurity,
          technology, entrepreneurship, and real-world execution.
        </p>
      </Reveal>

      <section className="split-grid split-grid-editorial">
        <Reveal as="article" className="surface section-panel story-panel" delay={90}>
          <span className="section-label">What Drives Me</span>
          <h2>Building depth, not just interest.</h2>
          <div className="signal-list">
            <p>
              I care most about solving problems that actually matter. I am interested in more
              than learning technology. I want to apply it in ways that help people, improve
              systems, and create real value.
            </p>
            <p>
              My work is shaped by technical curiosity, business thinking, and hands-on experience.
              Whether I am building a website, supporting digital systems, or solving a tech issue,
              I want the result to feel useful and intentional.
            </p>
            <p>
              This site is meant to show not just what I am interested in, but what I am actively
              building.
            </p>
          </div>
        </Reveal>

        <Reveal as="aside" className="surface section-panel profile-panel" delay={130}>
          <span className="section-label">At a Glance</span>
          <div className="profile-list">
            {profileNotes.map((item) => (
              <article key={item.label} className="profile-item">
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={165}>
          <span className="eyebrow">Principles</span>
          <h2>How I think about the work.</h2>
        </Reveal>

        <div className="focus-grid about-grid">
          {pillars.map((item, index) => (
            <Reveal
              key={item.label}
              as="article"
              className="surface focus-card principle-card"
              delay={190 + index * 40}
            >
              <span className="kicker">{item.label}</span>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
