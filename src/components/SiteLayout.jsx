import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
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

  const drawerMarkup = (
    <>
      <div
        className={`drawer-overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        id="mobile-drawer"
        className={`mobile-drawer${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-drawer-inner">
          <div className="drawer-head">
            <span className="eyebrow">Menu</span>
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
                {label}
              </NavLink>
            ))}
          </nav>

          <Link className="button drawer-cta" to="/contact">
            Contact
          </Link>
        </div>
      </aside>
    </>
  );

  return (
    <div className="site-shell">
      {typeof document !== "undefined" ? createPortal(drawerMarkup, document.body) : null}

      <div className="page-shell">
        <header className="topbar">
          <Link to="/" className="brand" aria-label="Victor Licona home page">
            <span className="brand-mark">VL</span>
            <span className="brand-copy">
              <strong>Victor Licona</strong>
              <small>Fort Worth, Texas</small>
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
            <nav className="nav" aria-label="Primary navigation">
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

        <footer className="site-footer">
          <div className="footer-block">
            <span className="eyebrow">Victor Licona</span>
            <p>Cybersecurity, technology, entrepreneurship, and real-world problem solving.</p>
          </div>

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
        </footer>
      </div>
    </div>
  );
}
