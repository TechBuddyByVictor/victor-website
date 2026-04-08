import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const principles = [
  {
    label: "Trust",
    title: "People need to feel safe handing you a problem",
    description:
      "That matters whether the job is cybersecurity, tech support, or business. Trust is not extra. It is part of the work.",
  },
  {
    label: "Execution",
    title: "Useful work beats impressive language",
    description:
      "I would rather solve the issue cleanly than sound dramatic about it. Results, clarity, and follow-through matter more.",
  },
  {
    label: "Discipline",
    title: "Serious standards create serious momentum",
    description:
      "The way I work, present myself, and build systems should reflect where I am headed, not just where I am today.",
  },
  {
    label: "Growth",
    title: "I am building for the long term",
    description:
      "This is not a one-season project. I am building technical depth, business range, and a reputation that compounds over time.",
  },
];

const storySteps = [
  {
    time: "Fort Worth foundation",
    title: "Learning through real technical environments",
    description:
      "My path is grounded in hands-on work, practical support, and seeing how technology affects everyday people.",
  },
  {
    time: "Current chapter",
    title: "Building into cybersecurity and systems thinking",
    description:
      "I am growing technical skill with a clear direction while keeping my work connected to trust, service, and execution.",
  },
  {
    time: "Business layer",
    title: "Turning support into a real brand with TechBuddy",
    description:
      "TechBuddy by Victor gives the business side of my identity real shape and real-world accountability.",
  },
  {
    time: "Long-term direction",
    title: "Combining security, leadership, and entrepreneurship",
    description:
      "I want to build a future where cybersecurity knowledge and founder discipline reinforce each other.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">About Victor</span>
        <h1>Young enough to be early. Serious enough to be building now.</h1>
        <p>
          I am Victor Licona, based in Fort Worth, Texas. I am building around cybersecurity,
          technology, business, and practical impact with the goal of becoming someone people trust
          to solve problems, build systems, and lead with intent.
        </p>
      </Reveal>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={90}>
          <span className="section-label">Who I Am</span>
          <h2>Driven, grounded, and focused on real usefulness.</h2>
          <p className="body-copy">
            I care about work that feels clean, capable, and real. I am not interested in building
            a persona that looks advanced but has nothing behind it. I want my reputation to come
            from actual execution: helping people, building systems, running a business, and moving
            with discipline.
          </p>
          <p className="body-copy">
            Fort Worth is where I am building from, but the vision is larger than location. I want
            to create a brand and career that feels credible in rooms where trust, leadership, and
            technical ability all matter.
          </p>
        </Reveal>

        <Reveal as="article" className="surface section-panel signal-panel" delay={140}>
          <span className="section-label">Quick Read</span>
          <div className="signal-list">
            <div>
              <strong>Cybersecurity is central to my future.</strong>
              <p>I want security to be a major part of the value I bring and the identity I build.</p>
            </div>
            <div>
              <strong>I like solving practical technical problems.</strong>
              <p>Not just ideas in theory. I enjoy helping people and systems work better in real life.</p>
            </div>
            <div>
              <strong>I think beyond a single job title.</strong>
              <p>Leadership, operations, business, and future companies are part of the long-term picture.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={120}>
          <span className="eyebrow">Operating Principles</span>
          <h2>The standards behind the work.</h2>
          <p>
            My personal brand should feel premium because the thinking behind it is deliberate. The
            same values should show up in the work, the business, and the way I carry myself.
          </p>
        </Reveal>

        <div className="feature-grid">
          {principles.map((principle, index) => (
            <Reveal
              key={principle.title}
              as="article"
              className="surface focus-card"
              delay={150 + index * 60}
            >
              <span className="kicker">{principle.label}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={180}>
          <span className="section-label">Why Cybersecurity</span>
          <h2>Because trust, systems, and risk all matter.</h2>
          <p className="body-copy">
            Cybersecurity fits the way I think. It requires discipline, awareness, precision, and a
            strong sense of responsibility. It is not only technical work. It is also work about
            protecting people, businesses, and systems that matter.
          </p>
          <p className="body-copy">
            That is why it connects naturally to everything else I am building: support, business,
            leadership, and reliable execution under pressure.
          </p>
        </Reveal>

        <Reveal as="article" className="surface section-panel" delay={230}>
          <span className="section-label">What I Want To Be Known For</span>
          <ul className="list">
            <li>Solving problems without making the process feel chaotic.</li>
            <li>Building trust with the same seriousness I bring to technical work.</li>
            <li>Creating businesses and systems that feel credible, sharp, and useful.</li>
            <li>Growing into leadership with real work behind the image.</li>
          </ul>
        </Reveal>
      </section>

      <Reveal as="section" className="surface section-panel" delay={260}>
        <span className="section-label">Timeline</span>
        <h2>The direction behind the brand.</h2>
        <div className="timeline">
          {storySteps.map((step) => (
            <div key={step.title} className="timeline-item">
              <small>{step.time}</small>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="surface cta-band" delay={300}>
        <span className="section-label">Next Step</span>
        <h2>If you want the serious version, look at the work.</h2>
        <p>
          The strongest way to understand where I am headed is to look at the projects, business,
          and systems I am already building around.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/experience">
            View Experience
          </Link>
          <Link className="button-secondary" to="/contact">
            Contact Me
          </Link>
        </div>
      </Reveal>
    </>
  );
}
