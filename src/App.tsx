import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useTranslation } from "react-i18next";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Loading from "./components/ui/Loading";
import "aos/dist/aos.css";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/about"));
const Contact = lazy(() => import("./pages/contact/contact"));
const ProjectDetail = lazy(() => import("./pages/project/ProjectDetail"));

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const language = i18n.resolvedLanguage ?? i18n.language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.title = t("siteTitle");
  }, [i18n.language, i18n.resolvedLanguage, t]);

  return (
    <div className="min-h-screen flex flex-col bg-[#070707] text-[#e7e7e7]">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
