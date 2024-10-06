import { SiReact } from "react-icons/si";
import { SiTailwindcss, SiGithub, SiX, SiFacebook } from "react-icons/si";
import { Linkedin } from "react-feather";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`relative py-6 text-center shadow-lg ${darkMode ? "bg-neutral-800 text-white": "bg-white text-gray-900"} transition-colors duration-500`}>
      <div className="flex items-center justify-center mt-4 mb-4 py-2 px-2 space-x-6">
        <a href="https://github.com/gitloper-azara" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:text-gray-700 dark:hover:text-white">
          <SiGithub size={24} />
        </a>
        <a href="https://twitter.com/muqitazara" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:text-gray-700 dark:hover:text-white">
          <SiX size={24} />
        </a>
        <a href="https://linkedin.com/in/yushahuazara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:text-gray-700 dark:hover:text-white">
          <Linkedin size={24} />
        </a>
        <a href="https://www.facebook.com/yushahuazara/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:text-gray-700 dark:hover:text-white">
          <SiFacebook size={24} />
        </a>
      </div>
      <div className="container mx-auto">
        <p className="text-sm md:text-base">
          &copy; 2024 Yushahu Yussif. All rights reserved.
        </p>
        <p className="flex items-center justify-center space-x-2 text-xs md:text-sm mt-1 ">
          <span>Built with React</span>
          <SiReact className="w-4 h-4 md:w-5 md:h5 text-blue-500" />
          <span>Styled with TailwindCSS</span>
          <SiTailwindcss className="w-4 h-4 md:w-5 md:h-5 text-teal-400" />
        </p>
      </div>
    </footer>
  )
}

export default Footer;
