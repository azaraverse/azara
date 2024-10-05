import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  // dark mode state toggling
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition duration-500`}>
      {/** Dark mode toggle */}
      <div className="fixed top-4 right-6 z-10">
        <button className="bg-skin text-white px-3 py-2 rounded-lg focus:outline-none" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/**Hero section */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mt-20 mb-6">
          Hello World, I go by <span className="text-skin">Azara</span>
        </h1>

        <p className="text-xl md:text-2xl mt-4 mb-8">
          A developer passionate about building anything with code blocks!
        </p>

        <NavLink to='/portfolio'>
          <button className="bg-skin hover:bg-skin-light text-white px-6 py-3 rounded-lg shadow-lg">
            View Portfolio
          </button>
        </NavLink>

        {/** Custom code block */}
        <div className="mt-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <pre className="text-left text-sm md:text-base text-gray-900 dark:text-white">
            <code>
              {`class Developer():
              """ Dev model
              """
              def __init__(self):
              """ Initialize Dev class with default values
              """
              self.name = "Yushahu Yussif"
              self.alias = "Azara"
              self.skills = ["Python", "JavaScript", "Django", "React"]
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Home;
