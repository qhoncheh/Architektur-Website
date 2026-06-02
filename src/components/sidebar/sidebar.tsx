import { FiDownload } from "react-icons/fi";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-[23%] min-h-screen bg-gray-900 flex flex-col justify-between p-8 ">
      <div>
        <h3 className="text-12 font-bold text-gray-300 text-center">Ghazaleh Ataei</h3>
        <div className="flex flex-col items-center pt-20 gap-4 uppercase text-gray-300">
          <NavLink to="/" className="flex items-center gap-3 px-6 py-3">
            <p className="text-lg">Projects</p>
          </NavLink>
          <NavLink to="/about" className="flex items-center gap-3 px-6 py-3">
            <p className="text-lg">About</p>
          </NavLink>
          <NavLink to="/contact" className="flex items-center gap-3 px-6 py-3">
            <p className="text-lg">Contact</p>
          </NavLink>
        </div>
      </div>
      <button className="bg-gray-500 rounded-full p-2 flex justify-center gap-4 font-semibold text-gray-300">Download CV <FiDownload /></button>
    </div>
  );
};

export default Sidebar;
