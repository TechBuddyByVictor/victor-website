import React from "react";
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

const collegeFacts = [
  {
    label: "School",
    value: "Dallas Baptist University",
  },
  {
    label: "Start",
    value: "Fall 2026",
  },
  {
    label: "Study",
    value: "Cybersecurity",
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
        <Reveal as="div" className="section-heading" delay={145}>
          <span className="eyebrow">College</span>
          <h2>The next chapter starts at DBU.</h2>
        </Reveal>

        <div className="about-layout">
          <Reveal as="article" className="editorial-panel editorial-panel-story" delay={175}>
            <span className="section-label">Education</span>
            <h2>I am heading to Dallas Baptist University to study cybersecurity.</h2>
            <p>
              In Fall 2026, I will begin at Dallas Baptist University and continue building
              toward work in cybersecurity, digital safety, and real-world technical systems.
            </p>
            <p>
              I see college as a place to sharpen technical skill, strengthen discipline, and
              connect classroom learning to the practical work I am already pursuing.
            </p>
          </Reveal>

          <Reveal as="aside" className="facts-panel facts-panel-compact" delay={210}>
            <span className="section-label">Path Ahead</span>
            <div className="facts-list">
              {collegeFacts.map((item) => (
                <div key={item.label} className="fact-row">
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
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
