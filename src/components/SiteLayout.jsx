import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function SiteLayout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <div className="site-glow site-glow-left" />
      <div className="site-glow site-glow-right" />

      <div className="page">
        <header className={`topbar surface${menuOpen ? " menu-open" : ""}`}>
          <Link to="/" className="brand" aria-label="Victor Licona home page">
            <span className="brand-mark">VL</span>
            <span className="brand-copy">
              <strong>Victor Licona</strong>
              <small>Fort Worth / Cybersecurity / Founder</small>
            </span>
          </Link>

          <button
            type="button"
            className={`nav-toggle${menuOpen ? " is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-panel${menuOpen ? " is-open" : ""}`}>
            <nav id="primary-navigation" className="nav" aria-label="Primary navigation">
              {navItems.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="nav-meta">
              <p>
                Building secure systems, real trust, and founder-level momentum through useful work.
              </p>
              <Link className="button button-nav" to="/contact">
                Start a Conversation
              </Link>
            </div>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>

        <footer className="site-footer surface">
          <div className="footer-grid">
            <div className="footer-lead">
              <span className="eyebrow">Victor Licona</span>
              <p>
                A premium personal brand site for cybersecurity, tech systems, and long-term
                business ambition rooted in real-world execution.
              </p>
            </div>

            <div className="footer-column">
              <strong>Based In</strong>
              <ul className="footer-list">
                <li>Fort Worth, Texas</li>
                <li>Local service, long-term reach</li>
              </ul>
            </div>

            <div className="footer-column">
              <strong>Built Around</strong>
              <ul className="footer-list">
                <li>Cybersecurity</li>
                <li>TechBuddy by Victor</li>
                <li>Systems, service, and growth</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
