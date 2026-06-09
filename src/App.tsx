import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Loading from "./components/ui/Loading";
import "aos/dist/aos.css";

const Project = lazy(() => import("./pages/project"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));

function App() {
  return (
    <div className="min-h-screen flex bg-gray-800">
      <div className="flex w-full">
        <Sidebar />
        <div className="flex justify-center items-center w-full text-gray-300 text-base">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
