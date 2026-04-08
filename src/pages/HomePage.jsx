import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const heroStats = [
  { value: "Fort Worth", label: "Rooted in Texas, building for bigger rooms." },
  { value: "TechBuddy", label: "A real local business, not a side-project label." },
  { value: "Cybersecurity", label: "The lane I am building into with discipline." },
];

const focusAreas = [
  {
    label: "Cybersecurity",
    title: "Security thinking with real-world context",
    description:
      "I am building toward cybersecurity with a mindset shaped by trust, systems, risk awareness, and practical problem solving.",
  },
  {
    label: "Entrepreneurship",
    title: "Founder energy backed by action",
    description:
      "I am not waiting until later to learn how business works. I am already building service, operations, and reputation through TechBuddy by Victor.",
  },
  {
    label: "Tech Support",
    title: "Useful work for real people",
    description:
      "I help seniors, families, and small businesses handle the technology problems that actually slow life and work down.",
  },
  {
    label: "Systems and Media",
    title: "Technical support beyond the screen",
    description:
      "From livestreams to church media to setup and troubleshooting, I work with systems that need to function smoothly under pressure.",
  },
];

const featuredWork = [
  {
    label: "Founder / Operator",
    title: "TechBuddy by Victor",
    description:
      "A local tech support business designed around clarity, trust, and real problem solving for people who need technology to simply work.",
    points: [
      "Support for devices, Wi-Fi, setup, troubleshooting, and scam concerns",
      "Bilingual local service for seniors, families, and small businesses",
      "Built to feel credible, calm, and professional from the first interaction",
    ],
  },
  {
    label: "Systems / Media",
    title: "Church media and livestream operations",
    description:
      "Hands-on experience with live environments where reliability matters and technical mistakes are visible in real time.",
    points: [
      "Livestream support and production flow",
      "Setup, troubleshooting, and ongoing technical coordination",
      "Real responsibility around systems people depend on every week",
    ],
  },
  {
    label: "Brand / Digital",
    title: "Website and personal brand building",
    description:
      "Developing a digital presence that matches the seriousness of the work, not a student template that says very little.",
    points: [
      "Custom site direction with premium design language",
      "Positioning that connects cybersecurity, service, and business ambition",
      "A brand built to grow alongside stronger work and stronger proof",
    ],
  },
  {
    label: "Execution / Support",
    title: "Real-world technical problem solving",
    description:
      "The through line in my work is simple: understand the problem, stay calm, and get people to a solution they can trust.",
    points: [
      "Explaining technical issues without making people feel lost",
      "Working with both systems and the people using them",
      "Treating reliability, trust, and presentation as part of the job",
    ],
  },
];

const techBuddyServices = [
  "Phone and device setup",
  "Computer troubleshooting",
  "Wi-Fi help and home network cleanup",
  "Scam awareness and digital safety help",
  "Small business support",
  "Simple, clear technology guidance",
];

const futureSignals = [
  {
    title: "Young, but already operating",
    description:
      "This brand is built to show that I am not waiting for permission to become credible. I am building credibility now.",
  },
  {
    title: "Focused on work that matters",
    description:
      "Cybersecurity, support, operations, and business all connect through one thing: helping systems and people work better.",
  },
  {
    title: "Built for the long game",
    description:
      "The current site shows the foundation. The next chapters add stronger projects, sharper wins, and companies with more scale.",
  },
];

export default function HomePage() {
  return (
    <>
      <Reveal as="section" className="surface hero-card" delay={40}>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Fort Worth / Cybersecurity / TechBuddy by Victor</span>
            <p className="hero-name">Victor Licona</p>
            <h1>Building secure systems, useful businesses, and a reputation backed by real work.</h1>
            <p className="hero-lead">
              I am a student building my future around cybersecurity, technology, entrepreneurship,
              and real-world problem solving. I work with actual systems, help actual people, and I
              am building a brand that reflects that level of seriousness.
            </p>

            <div className="hero-actions">
              <Link className="button" to="/experience">
                View My Work
              </Link>
              <Link className="button-secondary" to="/about">
                About Me
              </Link>
              <Link className="button-tertiary" to="/contact">
                Contact
              </Link>
            </div>

            <div className="stat-grid">
              {heroStats.map((item) => (
                <article key={item.value} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-rail">
            <article className="surface inset-card spotlight-card">
              <span className="section-label">Current Build</span>
              <h2>Tech-forward, trust-first, founder-minded.</h2>
              <p>
                I am building a profile where cybersecurity, business, operations, and service all
                reinforce each other instead of feeling disconnected.
              </p>
              <div className="chip-row">
                <span>Cybersecurity</span>
                <span>TechBuddy</span>
                <span>Operations</span>
                <span>Problem Solving</span>
              </div>
            </article>

            <div className="mini-grid">
              <article className="surface inset-card mini-panel">
                <span className="kicker">Proof</span>
                <strong>Real systems. Real users. Real responsibility.</strong>
                <p>
                  My work is not theoretical. It is built around environments where people need the
                  technology to work.
                </p>
              </article>

              <article className="surface inset-card mini-panel">
                <span className="kicker">Direction</span>
                <strong>Cybersecurity is the lane. Business is the multiplier.</strong>
                <p>
                  I want to build a career and companies around trust, execution, and useful
                  systems.
                </p>
              </article>
            </div>
          </aside>
        </div>
      </Reveal>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={80}>
          <span className="section-label">About</span>
          <h2>Serious early. Built around work, not talk.</h2>
          <p className="body-copy">
            I am Victor Licona from Fort Worth, Texas. My brand is built around cybersecurity,
            technology, entrepreneurship, and practical impact. I care about doing work that feels
            sharp, solves real problems, and earns trust from the people depending on it.
          </p>
          <p className="body-copy">
            I want people to understand me quickly: I am young, but I am not treating this stage of
            life casually. I am building skills, business experience, systems thinking, and a
            personal brand with real long-term intent behind it.
          </p>
        </Reveal>

        <Reveal as="article" className="surface section-panel signal-panel" delay={140}>
          <span className="section-label">What Stands Out</span>
          <div className="signal-list">
            <div>
              <strong>I help real people.</strong>
              <p>Not just ideas, mockups, or school exercises. Real devices, real stress, real fixes.</p>
            </div>
            <div>
              <strong>I build with trust in mind.</strong>
              <p>That matters in cybersecurity, in service, and in business.</p>
            </div>
            <div>
              <strong>I think like an operator.</strong>
              <p>Execution, communication, reliability, and presentation all count.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={110}>
          <span className="eyebrow">Focus Areas</span>
          <h2>What I am building and what I already do.</h2>
          <p>
            The goal is not to look broad for the sake of it. These areas connect because they all
            sit at the intersection of trust, systems, and real-world usefulness.
          </p>
        </Reveal>

        <div className="feature-grid">
          {focusAreas.map((area, index) => (
            <Reveal
              key={area.title}
              as="article"
              className="surface focus-card"
              delay={140 + index * 60}
            >
              <span className="kicker">{area.label}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="stack-section">
        <Reveal as="div" className="section-heading" delay={120}>
          <span className="eyebrow">Featured Work</span>
          <h2>Projects and experiences that already carry weight.</h2>
          <p>
            This is where the site moves from identity into proof. Each area shows that I am
            already building, serving, and operating in environments that matter.
          </p>
        </Reveal>

        <div className="project-grid">
          {featuredWork.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              className="surface project-card"
              delay={160 + index * 60}
            >
              <span className="kicker">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="list compact-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="surface techbuddy-panel" delay={180}>
        <div className="split-grid techbuddy-grid">
          <div className="section-panel no-padding">
            <span className="section-label">TechBuddy by Victor</span>
            <h2>Local tech support with calm service and real trust behind it.</h2>
            <p className="body-copy">
              TechBuddy by Victor is built to feel like a real business because that is exactly what
              I want it to become. It serves seniors, families, and small businesses with tech help
              that is clear, practical, and professional instead of confusing or impersonal.
            </p>
            <p className="body-copy">
              The brand stands for bilingual local support, honest communication, and technology
              help that makes people feel more confident instead of more overwhelmed.
            </p>
          </div>

          <div className="services-panel">
            <div className="service-grid">
              {techBuddyServices.map((service) => (
                <div key={service} className="service-chip">
                  {service}
                </div>
              ))}
            </div>

            <div className="trust-note">
              <strong>Why it matters</strong>
              <p>
                TechBuddy proves that I do not just talk about tech. I solve practical problems,
                build trust face to face, and run something that has to feel credible in the real
                world.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="split-grid">
        <Reveal as="article" className="surface section-panel" delay={200}>
          <span className="section-label">Vision</span>
          <h2>This is the early version of a much bigger build.</h2>
          <p className="body-copy">
            I want this site to make one thing obvious: I am building toward something substantial.
            Cybersecurity is a major part of that future, but so is leadership, entrepreneurship,
            and creating systems that people trust.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/about">
              Learn More
            </Link>
            <Link className="button-secondary" to="/contact">
              Reach Out
            </Link>
          </div>
        </Reveal>

        <Reveal as="article" className="surface section-panel" delay={250}>
          <span className="section-label">What This Site Should Say</span>
          <div className="signal-list">
            {futureSignals.map((signal) => (
              <div key={signal.title}>
                <strong>{signal.title}</strong>
                <p>{signal.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
