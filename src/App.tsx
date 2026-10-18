import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Loading from "./components/ui/Loading";
import "aos/dist/aos.css";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const ProjectDetail = lazy(() => import("./pages/project/ProjectDetail"));

function App() {
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
