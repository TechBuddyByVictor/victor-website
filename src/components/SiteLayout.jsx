import { Link, NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="page">
        <header className="topbar surface">
          <Link to="/" className="brand" aria-label="Victor Licona home page">
            <span className="brand-mark">VL</span>
            <span className="brand-copy">
              <strong>Victor Licona</strong>
              <small>Cybersecurity Student • Entrepreneur</small>
            </span>
          </Link>

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
        </header>

        <main className="page-content">
          <Outlet />
        </main>

        <footer className="site-footer">
          Minimal by design. Built to grow with Victor&apos;s work, reputation, and next
          opportunities.
        </footer>
      </div>
    </div>
  );
}
