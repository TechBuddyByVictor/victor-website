import Reveal from "../components/Reveal";

const values = [
  {
    label: "Problem Solving",
    copy: "Practical solutions matter more than theory alone.",
  },
  {
    label: "Execution",
    copy: "I want the work to function well in the real world.",
  },
  {
    label: "Growth",
    copy: "I am building stronger technical, business, and leadership depth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Reveal as="section" className="page-hero page-hero-about" delay={40}>
        <span className="eyebrow">About</span>
        <h1>About Victor</h1>
        <p className="hero-copyline">
          I am a student from Fort Worth, Texas, building my future around cybersecurity,
          technology, entrepreneurship, and real-world execution.
        </p>
      </Reveal>

      <section className="about-layout">
        <Reveal as="article" className="editorial-panel" delay={90}>
          <span className="section-label">Statement</span>
          <h2>I care about useful work.</h2>
          <p>
            What drives me most is solving problems that actually matter. I am interested in more
            than learning technology. I want to apply it in ways that help people, improve
            systems, and create real value.
          </p>
          <p>
            My work is shaped by technical curiosity, business thinking, and hands-on experience.
            Whether I am building a website, supporting digital systems, or solving a tech issue,
            I want the result to feel clean, capable, and intentional.
          </p>
        </Reveal>

        <Reveal as="aside" className="facts-panel" delay={130}>
          <span className="section-label">At a Glance</span>
          <div className="facts-list">
            <div className="fact-row">
              <small>Base</small>
              <strong>Fort Worth, Texas</strong>
            </div>
            <div className="fact-row">
              <small>Focus</small>
              <strong>Cybersecurity and digital systems</strong>
            </div>
            <div className="fact-row">
              <small>Direction</small>
              <strong>Technology, business, and long-term growth</strong>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal as="div" className="section-heading" delay={170}>
          <span className="eyebrow">Principles</span>
          <h2>How I approach the work.</h2>
        </Reveal>

        <div className="minimal-grid">
          {values.map((item, index) => (
            <Reveal key={item.label} as="article" className="line-card" delay={200 + index * 35}>
              <span className="kicker">{item.label}</span>
              <p>{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
