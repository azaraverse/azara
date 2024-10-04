import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to='/' className="text-skin text-lg">
          azara_( )
        </NavLink>
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
          <button className="text-skin">
            <span>&#9776;</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
