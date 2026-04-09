import Reveal from "../components/Reveal";

const workItems = [
  {
    label: "TechBuddy by Victor",
    title: "A local tech support business with real-world responsibility.",
    copy: "Helping seniors, families, and small businesses with setup, troubleshooting, Wi-Fi, scams, and everyday technology problems.",
  },
  {
    label: "Church Media",
    title: "Technical systems that need to work live.",
    copy: "Hands-on support across media, livestream, and digital workflows where reliability matters to real people.",
  },
  {
    label: "Web and Brand",
    title: "A stronger digital presence built with intention.",
    copy: "Designing and refining a cleaner online identity through web design, structure, and experience.",
  },
  {
    label: "Problem Solving",
    title: "Finding what is wrong and improving how it works.",
    copy: "From devices and networks to setup and digital tools, I enjoy making technology more usable and dependable.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Reveal as="section" className="page-hero page-hero-work page-hero-proof" delay={40}>
        <span className="eyebrow">Work</span>
        <h1>Work</h1>
        <p className="hero-copyline">
          A focused look at the systems, projects, and technical work giving the brand real proof.
        </p>
      </Reveal>

      <section className="page-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Selected</span>
          <h2>Real work, presented with more conviction.</h2>
        </Reveal>

        <div className="work-list">
          {workItems.map((item, index) => (
            <Reveal key={item.label} as="article" className="work-row" delay={120 + index * 35}>
              <div className="work-meta">
                <span className="kicker">{item.label}</span>
                <small className="work-index">{`0${index + 1}`}</small>
              </div>
              <div className="work-copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
