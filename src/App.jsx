import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TechBuddyPage from "./pages/TechBuddyPage";

const pageTitles = {
  "/": "Victor Licona | Home",
  "/about": "Victor Licona | About",
  "/experience": "Victor Licona | Work",
  "/techbuddy": "Victor Licona | TechBuddy",
  "/contact": "Victor Licona | Contact",
};

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? "Victor Licona | Not Found";
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="route-shell">
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
