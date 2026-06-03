import { Route, Routes } from "react-router";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Project from "./pages/project";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="min-h-screen flex bg-gray-800  ">
      <div className="flex w-full">
        <Sidebar />
        <div className="flex justify-center align-center w-full text-gray-300 text-base">
          <Routes>
            <Route path='/' element={<Project />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
