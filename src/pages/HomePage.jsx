import { Link } from "react-router-dom";

const cards = [
  {
    to: "/about",
    label: "Page One",
    title: "About",
    description:
      "More about who I am, what matters to me, and the kind of person behind the work.",
    cta: "Explore the about page",
  },
  {
    to: "/experience",
    label: "Page Two",
    title: "Experience",
    description:
      "A clearer place for achievements, projects, strengths, and the story I want to tell.",
    cta: "See my experience",
  },
  {
    to: "/contact",
    label: "Page Three",
    title: "Contact",
    description:
      "An easy way for people to reach me through email, LinkedIn, GitHub, and future links.",
    cta: "Open contact page",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="panel hero-copy">
          <span className="eyebrow">Welcome</span>
          <h1>Building work that feels useful and human.</h1>
          <p>
            I'm Victor, and this site is a digital introduction to who I am, what I care about,
            and where I'm headed. It keeps the professional side of a profile site, but gives it
            more personality and room to grow.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/about">
              Learn About Me
            </Link>
            <Link className="button-secondary" to="/contact">
              Get In Touch
            </Link>
          </div>
        </div>

        <aside className="panel hero-card" aria-label="Profile summary">
          <div className="portrait" role="img" aria-label="Editorial portrait placeholder"></div>
          <div className="mini-card">
            <strong>Current direction</strong>
            <p>
              Open to opportunities, collaborations, and conversations that connect creativity,
              communication, and growth.
            </p>
          </div>
        </aside>
      </section>

      <section className="card-grid">
        {cards.map((card) => (
          <Link key={card.to} className="card-link panel" to={card.to}>
            <span className="section-label">{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <span>{card.cta}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
