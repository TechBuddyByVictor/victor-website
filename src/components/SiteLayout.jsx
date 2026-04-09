import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Work" },
  { to: "/techbuddy", label: "TechBuddy" },
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

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <div className="site-glow site-glow-left" />
      <div className="site-glow site-glow-right" />

      <div
        className={`drawer-overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <div
        id="mobile-drawer"
        className={`mobile-drawer${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer-inner">
          <div className="drawer-head">
            <span className="eyebrow">Navigation</span>
            <button
              type="button"
              className="drawer-close"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="drawer-nav" aria-label="Mobile navigation">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `drawer-link${isActive ? " active" : ""}`}
              >
                <span>{label}</span>
                <small>Open page</small>
              </NavLink>
            ))}
          </nav>

          <div className="drawer-actions">
            <Link className="button drawer-cta" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="page">
        <header className="topbar surface">
          <Link to="/" className="brand" aria-label="Victor Licona home page">
            <span className="brand-mark">VL</span>
            <span className="brand-copy">
              <strong>Victor Licona</strong>
              <small>Fort Worth / Cybersecurity / TechBuddy</small>
            </span>
          </Link>

          <button
            type="button"
            className={`nav-toggle${menuOpen ? " is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div className="nav-panel">
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

            <Link className="button button-nav" to="/contact">
              Contact
            </Link>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>

        <footer className="site-footer surface">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="eyebrow">Victor Licona</span>
              <p>Cybersecurity, technology, entrepreneurship, and real-world problem solving.</p>
              <small>Built with intention.</small>
            </div>

            <div className="footer-column">
              <strong>Navigate</strong>
              <div className="footer-links">
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
              </div>
            </div>

            <div className="footer-column">
              <strong>Connect</strong>
              <div className="footer-links footer-links-stack">
                <a href="mailto:contact@victorlicona.com">Email</a>
                <a href="https://www.linkedin.com/in/victorlicona/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
