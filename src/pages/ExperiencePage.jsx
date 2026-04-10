import Reveal from "../components/Reveal";

const workItems = [
  {
    label: "TechBuddy by Victor",
    title: "A local tech support business built around real trust.",
    copy: "Helping seniors, families, and small businesses with setup, troubleshooting, Wi-Fi, scams, and everyday technology issues.",
  },
  {
    label: "Media and Livestream Systems",
    title: "Technical systems that need to work when people are counting on them.",
    copy: "Hands-on experience supporting media, livestreaming, and digital workflows where consistency and reliability matter.",
  },
  {
    label: "Web and Brand Development",
    title: "A digital presence built with more clarity and intention.",
    copy: "Building and refining websites, structure, and user experience to create a cleaner and more professional online identity.",
  },
  {
    label: "Problem Solving",
    title: "Practical troubleshooting across tools, systems, and setups.",
    copy: "From devices and networks to software, setup, and support, I enjoy making technology more useful, dependable, and easier to work with.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Reveal as="section" className="page-hero page-hero-work page-hero-proof" delay={40}>
        <span className="eyebrow">Work</span>
        <h1>Work</h1>
        <p className="hero-copyline">
          A selection of the work, systems, and real-world technical experience behind the brand.
        </p>
      </Reveal>

      <section className="page-section">
        <Reveal as="div" className="section-heading" delay={90}>
          <span className="eyebrow">Selected</span>
          <h2>Work that shows how I think, build, and solve.</h2>
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
