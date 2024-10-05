import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`z-10 py-6 text-center shadow-lg ${darkMode ? "bg-gray-800 text-white": "bg-white text-gray-900"} transition-colors duration-500`}>
      <div className="container mx-auto">
        <p className="text-sm md:text-base">
          &copy; 2024 Yushahu Yussif. All rights reserved.
        </p>
        <p className="flex items-center justify-center space-x-2 text-xs md:text-sm mt-1 ">
          <span>Built with React</span>
          <SiReact className="w-4 h-4 md:w-5 md:h5 text-blue-500" />
          <span>| Styled with TailwindCSS</span>
          <SiTailwindcss className="w-4 h-4 md:w-5 md:h-5 text-teal-400" />
        </p>
      </div>
    </footer>
  )
}

export default Footer;
