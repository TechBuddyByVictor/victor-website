import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const pageTitles = {
  "/": "Victor | Home",
  "/about": "Victor | About",
  "/experience": "Victor | Experience",
  "/contact": "Victor | Contact",
};

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? "Victor | Not Found";
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return <AppRoutes />;
}
