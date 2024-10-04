import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to='/' className="text-white">Home</Link>
        <div>
          <Link to='/portfolio' className="text-gray-200 hover:text-white px-5">
            Portfolio
          </Link>
          <Link to='/blog' className="text-gray-200 hover:text-white px-5">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
