import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Prism from 'prismjs';
import "prismjs/components/prism-python";

const Home = ({ darkMode }) => {

  // highlight code after rendering page
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition duration-500 pt-20`}>
      {/**Hero section */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mt-20 mb-6">
          Hello World, I go by <span className="text-skin">Azara</span>.
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
        <div className="mt-12 p-6 rounded-lg shadow-lg">
          <pre className="text-left text-sm md:text-base text-gray-900 dark:text-white">
            <code className="language-python">
              {`class Developer():
      """ Dev model
      """
      def __init__(self: Self@Developer) -> None:
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
