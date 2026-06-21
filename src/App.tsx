import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Loading from "./components/ui/Loading";
import "aos/dist/aos.css";

const Project = lazy(() => import("./pages/project/project"));
const About = lazy(() => import("./pages/about/about"));
const Contact = lazy(() => import("./pages/contact/contact"));

function App() {
  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.88)), url('/10.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
