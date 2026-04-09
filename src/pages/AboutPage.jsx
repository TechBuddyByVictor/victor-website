import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const storyItems = [
  {
    label: "Who I Am",
    title: "A student building with serious intent.",
    description:
      "I am Victor Licona from Fort Worth, Texas. My focus is cybersecurity, technical problem solving, and long-term business growth.",
  },
  {
    label: "What I Value",
    title: "Trust, clarity, and clean execution.",
    description:
      "I want the work to feel useful, credible, and well put together instead of loud or overdone.",
  },
  {
    label: "Vision",
    title: "Security, systems, and future companies.",
    description:
      "The direction is long-term: build technical depth, strong reputation, and businesses with real weight behind them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Reveal as="section" className="surface page-hero" delay={40}>
        <span className="eyebrow">About</span>
        <h1>Focused, grounded, and building with intent.</h1>
        <p>
          I am building around cybersecurity, technology, and business with a brand that should
          feel serious, clean, and earned.
        </p>
      </Reveal>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Overview</span>
          <h2>The background behind the brand.</h2>
        </Reveal>

        <div className="focus-grid">
          {storyItems.map((item, index) => (
            <Reveal
              key={item.label}
              as="article"
              className="surface focus-card"
              delay={120 + index * 50}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface cta-band" delay={190}>
        <span className="section-label">Continue</span>
        <h2>See the work behind the direction.</h2>
        <div className="hero-actions">
          <Link className="button" to="/experience">
            View Work
          </Link>
          <Link className="button-secondary" to="/techbuddy">
            TechBuddy
          </Link>
        </div>
      </Reveal>
    </>
  );
}
