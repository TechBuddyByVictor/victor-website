import { useEffect } from "react";

function UnavailablePage() {
  return (
    <main className="unavailable-shell" aria-labelledby="unavailable-title">
      <section className="unavailable-panel">
        <span className="unavailable-kicker">Victor Licona</span>
        <h1 id="unavailable-title">This site is temporarily unavailable.</h1>
        <p>
          The website is offline for now. Please check back later.
        </p>
      </section>
    </main>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Victor Licona | Temporarily Unavailable";

    const descriptionTag = document.querySelector('meta[name="description"]');
    const robotsTag = document.querySelector('meta[name="robots"]');

    if (descriptionTag) {
      descriptionTag.setAttribute("content", "This website is temporarily unavailable.");
    }

    if (robotsTag) {
      robotsTag.setAttribute("content", "noindex, nofollow");
    }

    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return <UnavailablePage />;
}
