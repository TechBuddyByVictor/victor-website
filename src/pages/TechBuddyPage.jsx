import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const services = [
  "New device setup",
  "Wi-Fi and printer help",
  "Computer and phone support",
  "Troubleshooting slow or confusing devices",
  "Scam awareness and safer account habits",
  "Small business tech support",
];

const processSteps = [
  {
    label: "01",
    title: "Listen first",
    copy: "Start with the problem, the device, and what needs to work again.",
  },
  {
    label: "02",
    title: "Fix what matters",
    copy: "Handle the setup, troubleshooting, or safety concern without adding confusion.",
  },
  {
    label: "03",
    title: "Leave it clearer",
    copy: "Explain what changed and what to do next so the support feels useful after the visit.",
  },
];

export default function TechBuddyPage() {
  return (
    <>
      <Reveal as="section" className="page-hero page-hero-techbuddy page-hero-service" delay={40}>
        <span className="eyebrow">TechBuddy by Victor</span>
        <h1>Local tech support that feels clear, trustworthy, and practical.</h1>
        <p className="hero-copyline">
          TechBuddy by Victor helps seniors, families, and small businesses with the technology
          they rely on every day, from setup to troubleshooting to safer digital habits.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/contact">
            Contact TechBuddy
          </Link>
          <a className="button-secondary" href="tel:8174704724">
            Get Help
          </a>
        </div>
      </Reveal>

      <section className="service-layout">
        <Reveal as="article" className="editorial-panel editorial-panel-story" delay={90}>
          <span className="section-label">Overview</span>
          <h2>Technology support that feels simpler, clearer, and more human.</h2>
          <p>
            I built TechBuddy by Victor to help people get real support with the devices, systems,
            accounts, and everyday technology they depend on.
          </p>
          <p>
            It is designed for seniors, families, and small businesses who want trustworthy help
            without confusion, pressure, or unnecessary complexity.
          </p>
        </Reveal>

        <Reveal as="article" className="facts-panel facts-panel-compact" delay={130}>
          <span className="section-label">Who It Helps</span>
          <div className="facts-list">
            <div className="fact-row">
              <strong>Seniors</strong>
            </div>
            <div className="fact-row">
              <strong>Families</strong>
            </div>
            <div className="fact-row">
              <strong>Small businesses</strong>
            </div>
            <div className="fact-row">
              <strong>Anyone who wants clear, practical tech help</strong>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal as="div" className="section-heading" delay={170}>
          <span className="eyebrow">Services</span>
          <h2>Support for the issues people actually run into.</h2>
        </Reveal>

        <div className="minimal-grid">
          {services.map((service, index) => (
            <Reveal key={service} as="article" className="line-card" delay={200 + index * 30}>
              <p>{service}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section">
        <Reveal as="div" className="section-heading" delay={235}>
          <span className="eyebrow">Process</span>
          <h2>A simple way to get the issue handled.</h2>
        </Reveal>

        <div className="minimal-grid">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.label}
              as="article"
              className="line-card process-card"
              delay={265 + index * 30}
            >
              <span className="kicker">{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="statement-strip statement-strip-service" delay={315}>
        <span className="section-label">TechBuddy</span>
        <p>Built around trust, clarity, patience, and practical problem solving.</p>
      </Reveal>
    </>
  );
}
