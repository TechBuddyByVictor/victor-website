import { Link, NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function SiteLayout() {
  return (
    <div className="page">
      <header className="topbar">
        <Link to="/" className="brand">
          Victor
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

      <main>
        <Outlet />
      </main>

      <footer>Built to introduce Victor with clarity, warmth, and a little style.</footer>
    </div>
  );
}
