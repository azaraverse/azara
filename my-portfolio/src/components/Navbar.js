import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 p-6">
      <div className="container mx-auto flex justify-between items-center">

        {/** Logo */}
        <NavLink to='/' className="text-skin text-lg">
          azara_( )
        </NavLink>

        {/** Desktop NavLinks */}
        <div className="hidden md:flex">
          <NavLink
            to='/portfolio'
            className={({ isActive }) => `text-skin px-5 ${isActive ? "text-black hover:text-skin" : "hover:text-black"}`}>
            portfolio_( )
          </NavLink>
          <NavLink
            to='/blog'
            className={({ isActive }) => `text-skin px-5 ${isActive ? "text-black hover:text-skin" : "hover:text-black"}`}>
            blog_( )
          </NavLink>
        </div>
        {/** Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button className="text-skin focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span>&#9776;</span>
          </button>
        </div>
      </div>

      {/** Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out`}>
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
      </div>
    </nav>
  )
}

export default Navbar;
