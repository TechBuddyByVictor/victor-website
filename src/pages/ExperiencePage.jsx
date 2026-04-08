export default function ExperiencePage() {
  return (
    <>
      <section className="panel page-hero">
        <span className="eyebrow">Experience</span>
        <h1>The story behind the profile.</h1>
        <p>
          This page gives you a dedicated place for work history, projects, certifications, skills,
          and any milestones you want to highlight as your website grows.
        </p>
      </section>

      <section className="panel section-panel">
        <span className="section-label">Timeline</span>
        <h2>Where you are now and where you're going.</h2>
        <div className="timeline">
          <div className="timeline-item">
            <strong>Personal Brand in Progress</strong>
            <small>Now</small>
            <p>
              Building a website that introduces who I am, what I value, and the kind of
              opportunities I want to grow into.
            </p>
          </div>
          <div className="timeline-item">
            <strong>Projects and Skills</strong>
            <small>Next section to personalize</small>
            <p>
              This space can be expanded with real project summaries, tools, accomplishments, and
              wins that support your professional story.
            </p>
          </div>
          <div className="timeline-item">
            <strong>Future Goals</strong>
            <small>Always growing</small>
            <p>
              The bigger goal is to keep building experience, confidence, and a body of work that
              opens doors.
            </p>
          </div>
        </div>
      </section>

      <section className="story-grid">
        <article className="panel section-panel story-block">
          <span className="kicker">Projects</span>
          <strong>Show what you've made</strong>
          <p>
            Add featured work here with screenshots, descriptions, and links so visitors can see
            proof of your skills.
          </p>
        </article>
        <article className="panel section-panel story-block">
          <span className="kicker">Skills</span>
          <strong>Highlight your toolbox</strong>
          <p>
            This is a great place for languages, frameworks, soft skills, certifications, or any
            strengths you want employers and collaborators to notice.
          </p>
        </article>
      </section>
    </>
  );
}
