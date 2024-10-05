import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-10 top-0 p-6 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-skin"} transition duration-500`}>
      <div className="container mx-auto flex justify-between items-center">
        {/** Logo */}
        <NavLink to='/' className="text-skin text-lg">
          azara_( )
        </NavLink>

        {/** Desktop NavLinks */}
        <div className="hidden md:flex items-center">
          <NavLink
            to='/portfolio'
            className={({ isActive }) => `text-skin px-5 py-2 ${isActive ? "text-skin-light hover:text-skin" : "hover:text-skin-light"}`}>
            Portfolio( )
          </NavLink>
          <NavLink
            to='/blog'
            className={({ isActive }) => `text-skin px-5 py-2 ${isActive ? "text-skin-light hover:text-skin" : "hover:text-skin-light"}`}>
            Blogs( )
          </NavLink>

          {/** Dark mode toggle */}
          <button className="bg-skin hover:bg-skin-light text-white px-5 py-2 rounded-lg focus:outline-none" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {/** Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button className="text-skin focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>


      {/** Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt4">
          <NavLink
            to='/portfolio'
            /* close Menu on item click using setIsMenuOpen */
            className="block text-skin py-2 px-6 hover:text-black" onClick={() => setIsMenuOpen(false)}>
              portfolio_( )
          </NavLink>
          <NavLink
            to='/blog'
            className="block text-skin py-2 px-6 hover:text-black" onClick={() => setIsMenuOpen(false)}>
              blog_( )
          </NavLink>
          {/** Dark mode toggle */}
          <button className="bg-skin text-white px-5 py-2 rounded-lg focus:outline-none" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
