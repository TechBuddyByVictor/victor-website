import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TechBuddyPage from "./pages/TechBuddyPage";

const pageTitles = {
  "/": "Victor Licona | Cybersecurity, Technology, and Real-World Problem Solving",
  "/about": "Victor Licona | About",
  "/experience": "Victor Licona | Work",
  "/techbuddy": "Victor Licona | TechBuddy by Victor",
  "/contact": "Victor Licona | Contact",
};

const pageDescriptions = {
  "/":
    "Victor Licona is a Fort Worth builder focused on cybersecurity, technology, entrepreneurship, and real-world problem solving.",
  "/about":
    "Learn more about Victor Licona, a Fort Worth student building toward cybersecurity, technology, entrepreneurship, and practical systems.",
  "/experience":
    "Explore Victor Licona's work across TechBuddy, technical systems, media support, websites, and real-world problem solving.",
  "/techbuddy":
    "TechBuddy by Victor offers local tech support for seniors, families, and small businesses with clear, trustworthy help.",
  "/contact":
    "Connect with Victor Licona for collaboration, project conversations, or TechBuddy support.",
};

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? "Victor Licona | Not Found";
    const descriptionTag = document.querySelector('meta[name="description"]');

    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        pageDescriptions[location.pathname] ??
          "Victor Licona is building around cybersecurity, technology, entrepreneurship, and practical problem solving.",
      );
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return (
    <div className="route-shell">
      <Routes location={location}>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="techbuddy" element={<TechBuddyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default function App() {
  return <AppRoutes />;
}
