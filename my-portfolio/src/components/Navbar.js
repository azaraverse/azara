import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { SiGithub, SiX, SiFacebook } from "react-icons/si";
import { Linkedin } from "react-feather";
import { motion } from "framer-motion";
import { ReactComponent as BrandLogo } from "../assets/brand-logo.svg";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-10 top-0 shadow-md ${darkMode ? "bg-neutral-800 text-white" : "bg-white text-gray-900"} transition-colors duration-500`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <BrandLogo className="w-20 h-auto self-center text-blue-700 dark:text-blue-400 transition-colors duration-500 whitespace-nowrap"
            style={{ fill: 'currentcolor' }} />
        </NavLink>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => `font-semibold text-blue-700 dark:text-blue-400 transition-colors duration-500 px-5 py-2 ${isActive ? "text-blue-700 underline decoration-double hover:text-gray-700" : "hover:text-gray-700 dark:hover:text-white"}`}>
            <span className="font-mono">Portfolio()</span>
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => `font-semibold text-blue-700 dark:text-blue-400 transition-colors duration-500 px-5 py-2 ${isActive ? "text-blue-700 underline decoration-double hover:text-gray-700" : "hover:text-gray-700 dark:hover:text-white"}`}>
            <span className="font-mono">Blogs()</span>
          </NavLink>

          {/* Social Links */}
          <div className="flex space-x-6">
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

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="bg-blue-700 dark:bg-blue-400 text-white px-4 py-2 rounded-lg focus:outline-none font-medium text-sm shadow-md hover:bg-blue-400 hover:text-white dark:hover:bg-blue-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button
            className="text-blue-700 dark:text-blue-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-4 px-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <NavLink
            to="/portfolio"
            className="block py-2 px-6 text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:bg-gray-100 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="font-mono">Portfolio()</span>
          </NavLink>
          <NavLink
            to="/blogs"
            className="block py-2 px-6 text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:bg-gray-100 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="font-mono">Blogs()</span>
          </NavLink>

          {/* Social Links */}
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://github.com/gitloper-azara" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:text-gray-700">
              <SiGithub size={24} />
            </a>
            <a href="https://twitter.com/muqitazara" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:text-gray-700">
              <SiX size={24} />
            </a>
            <a href="https://linkedin.com/in/yushahuazara" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:text-gray-700">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/yushahuazara/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-700 dark:text-blue-400 transition-colors duration-500 hover:text-gray-700 dark:hover:text-white">
              <SiFacebook size={24} />
            </a>
          </div>

          {/* Dark mode toggle */}
          <div className="mt-4 flex justify-center">
            <button
              className="bg-blue-700 dark:bg-blue-400 text-white mb-4 px-4 py-2 rounded-lg focus:outline-none font-medium text-sm"
              onClick={() => {
                toggleDarkMode();
                setIsMenuOpen(!isMenuOpen);
              }}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
