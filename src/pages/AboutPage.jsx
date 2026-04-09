import Reveal from "../components/Reveal";

const pillars = [
  {
    label: "Problem Solving",
    description: "I care about practical solutions, not just theory.",
  },
  {
    label: "Execution",
    description: "I like building things that actually work in the real world.",
  },
  {
    label: "Growth",
    description: "I'm constantly improving my skills in technology, business, and leadership.",
  },
  {
    label: "Vision",
    description:
      "I'm building toward a future that combines cybersecurity, entrepreneurship, and long-term impact.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">About</span>
        <h1>About Victor</h1>
        <p>
          I'm Victor Licona, a student from Fort Worth, Texas, building my future at the
          intersection of cybersecurity, technology, entrepreneurship, and real-world execution.
        </p>
      </Reveal>

      <Reveal as="section" className="surface section-panel" delay={90}>
        <span className="section-label">Overview</span>
        <div className="signal-list">
          <p>
            What drives me most is solving problems that actually matter. I'm interested in more
            than just learning technology - I want to apply it in practical ways that help people,
            improve systems, and create real value.
          </p>
          <p>
            My work is shaped by a mix of technical curiosity, business thinking, and hands-on
            experience. Whether I'm building a website, helping someone solve a tech issue,
            supporting digital systems, or developing a business idea, I care about making things
            work well and feel intentional.
          </p>
          <p>
            I'm especially focused on cybersecurity, modern digital tools, and building projects
            that reflect both professionalism and purpose. I want this site to represent that
            clearly: not just what I'm interested in, but what I'm actively building.
          </p>
        </div>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={135}>
          <span className="eyebrow">Values</span>
          <h2>The principles behind how I build.</h2>
        </Reveal>

        <div className="focus-grid">
          {pillars.map((item, index) => (
            <Reveal
              key={item.label}
              as="article"
              className="surface focus-card"
              delay={165 + index * 45}
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
