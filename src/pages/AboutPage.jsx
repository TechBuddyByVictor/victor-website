import Reveal from "../components/Reveal";

const values = [
  {
    label: "Problem Solving",
    copy: "I look for practical fixes that are clear, dependable, and useful outside a classroom.",
  },
  {
    label: "Execution",
    copy: "I care about finishing the work, testing the details, and making the result easier to use.",
  },
  {
    label: "Vision",
    copy: "I am building toward cybersecurity, business, and long-term work that helps people.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Reveal as="section" className="page-hero page-hero-about page-hero-editorial" delay={40}>
        <span className="eyebrow">About</span>
        <h1>About Victor</h1>
        <p className="hero-copyline">
          I am Victor Licona, a Fort Worth builder focused on cybersecurity, practical technology,
          entrepreneurship, and real-world problem solving.
        </p>
      </Reveal>

      <section className="about-layout">
        <Reveal as="article" className="editorial-panel editorial-panel-story" delay={90}>
          <span className="section-label">Statement</span>
          <h2>I am building toward work that is useful, disciplined, and real.</h2>
          <p>
            I am interested in more than learning technology. I want to use it to solve problems,
            improve systems, and make everyday tools easier and safer for real people.
          </p>
          <p>
            My path combines cybersecurity, business thinking, and hands-on technical work.
            Whether I am building a website, supporting media systems, troubleshooting devices, or
            growing TechBuddy by Victor, I care about clarity, trust, and execution.
          </p>
        </Reveal>

        <Reveal as="aside" className="facts-panel facts-panel-compact" delay={130}>
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
          <h2>The standards behind how I work.</h2>
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
