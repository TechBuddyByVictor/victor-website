import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Work" },
  { to: "/techbuddy", label: "TechBuddy" },
  { to: "/contact", label: "Contact" },
];

const routeSignals = {
  "/": { label: "Origin", code: "VL-00" },
  "/about": { label: "Profile", code: "VL-01" },
  "/experience": { label: "Work", code: "VL-02" },
  "/techbuddy": { label: "Support", code: "VL-03" },
  "/contact": { label: "Contact", code: "VL-04" },
  "/404": { label: "Missing", code: "VL-99" },
};

export default function SiteLayout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef(null);
  const drawerRef = useRef(null);
  const navToggleRef = useRef(null);
  const drawerCloseRef = useRef(null);
  const wasMenuOpenRef = useRef(false);
  const currentYear = new Date().getFullYear();
  const currentSignal = routeSignals[location.pathname] ?? routeSignals["/404"];
  const scrollPercent = Math.round(scrollProgress * 100).toString().padStart(2, "0");
  const activeNavIndex = Math.max(
    navItems.findIndex(({ to, end }) =>
      end ? location.pathname === to : location.pathname.startsWith(to),
    ),
    0,
  );

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let frameId = 0;

    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0;

      setScrollProgress(Math.max(nextProgress, 0));
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateScrollProgress);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      drawerCloseRef.current?.focus();
    } else if (wasMenuOpenRef.current) {
      navToggleRef.current?.focus();
    }

    wasMenuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const drawerNode = drawerRef.current;

      if (!drawerNode) {
        return;
      }

      const focusableNodes = drawerNode.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      const firstFocusable = focusableNodes[0];
      const lastFocusable = focusableNodes[focusableNodes.length - 1];

      if (!firstFocusable || !lastFocusable) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const headerNode = headerRef.current;

    if (!headerNode) {
      return undefined;
    }

    const updateHeaderOffset = () => {
      const height = Math.ceil(headerNode.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--header-offset", `${height}px`);
    };

    updateHeaderOffset();

    const observer = new ResizeObserver(() => {
      updateHeaderOffset();
    });

    observer.observe(headerNode);
    window.addEventListener("resize", updateHeaderOffset);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeaderOffset);
    };
  }, []);

  const drawerMarkup = menuOpen ? (
    <>
      <div
        className="drawer-overlay is-open"
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <aside
        ref={drawerRef}
        id="mobile-drawer"
        className="mobile-drawer is-open"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-inner">
          <div className="drawer-head">
            <span className="eyebrow">Menu</span>
            <button
              ref={drawerCloseRef}
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
  ) : null;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      {typeof document !== "undefined" ? createPortal(drawerMarkup, document.body) : null}

      <aside
        className="signal-seal"
        style={{
          "--scroll-progress": scrollProgress,
          "--scroll-progress-percent": `${scrollProgress * 100}%`,
          "--signal-needle-offset": `${scrollProgress * 9.96}rem`,
        }}
        aria-hidden="true"
      >
        <span className="signal-seal-code">{currentSignal.code}</span>
        <span className="signal-seal-core">VL</span>
        <span className="signal-seal-route">{currentSignal.label}</span>
        <span className="signal-seal-readout">{scrollPercent}</span>
        <span className="signal-seal-axis signal-seal-axis-x" />
        <span className="signal-seal-axis signal-seal-axis-y" />
        <span className="signal-seal-needle" />
      </aside>

      <div className="page-shell">
        <header ref={headerRef} className="topbar">
          <span
            className="scroll-progress"
            style={{ "--scroll-progress": scrollProgress }}
            aria-hidden="true"
          />

          <Link to="/" className="brand" aria-label="Victor Licona home page">
            <span className="brand-mark">VL</span>
            <span className="brand-copy">
              <strong>Victor Licona</strong>
              <small>Fort Worth, Texas</small>
            </span>
          </Link>

          <div className="header-status" aria-hidden="true">
            <span>{currentSignal.code}</span>
            <strong>{currentSignal.label}</strong>
          </div>

          <button
            ref={navToggleRef}
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
            <nav
              className="nav"
              style={{
                "--active-nav-index": activeNavIndex,
                "--nav-item-count": navItems.length,
              }}
              aria-label="Primary navigation"
            >
              <span className="nav-selector" aria-hidden="true" />
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

        <main key={location.pathname} id="main-content" className="page-content">
          <Outlet />
        </main>

        <footer className="site-footer">
          <div className="footer-top">
            <span className="footer-mark" aria-hidden="true">VL</span>
            <div className="footer-identity">
              <span className="eyebrow">Victor Licona</span>
              <h2 className="footer-title">Victor Licona</h2>
              <p className="footer-tagline">
                Cybersecurity, technology, entrepreneurship, and practical systems that help
                people move forward.
              </p>
            </div>
            <Link className="button footer-cta" to="/contact">
              Start a Conversation
            </Link>
          </div>

          <div className="footer-main">
            <nav className="footer-column" aria-label="Footer navigation">
              <small>Navigate</small>
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
            </nav>

            <nav className="footer-column" aria-label="Footer contact links">
              <small>Connect</small>
              <div className="footer-links footer-links-compact">
                <a href="mailto:contact@victorlicona.com">Email</a>
                <a href="https://www.linkedin.com/in/victorlicona/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="tel:8174704724">TechBuddy</a>
              </div>
            </nav>
          </div>

          <div className="footer-bottom">
            <small>Fort Worth, Texas</small>
            <small>Cybersecurity / TechBuddy / Systems</small>
            <span>{`Copyright ${currentYear} Victor Licona`}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
