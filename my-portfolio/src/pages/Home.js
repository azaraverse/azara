import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Prism from 'prismjs';
import "prismjs/components/prism-python";
import { Linkedin } from "react-feather";
import { SiGithub, SiX } from "react-icons/si";

const Home = ({ darkMode }) => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // highlight code after rendering page
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-colors duration-500`}>
      {/* Animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            y: [0, -100],
            x: [0, -100],
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Main content */}
        <main className="py-48 px-6">
          <motion.h1
            className="text-4xl font-extrabold mb-6 text-center tracking-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi! I am <span className="text-skin">Azara</span>.
          </motion.h1>
          <motion.p
            className="text-center max-w-lg mx-auto mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            I am a developer with experience in <span className="text-skin">backend</span> and <span className="text-skin">frontend</span> technologies,
            focused on building experiences with code.
          </motion.p>
          {/* Social Links */}
          <motion.div
            className="mt-6 flex justify-center space-x-6"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.7 }}
          >
            <a href="https://github.com/gitloper-azara" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-skin hover:text-gray-700">
              <SiGithub size={24} />
            </a>
            <a href="https://twitter.com/muqitazara" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-skin hover:text-gray-700">
              <SiX size={24} />
            </a>
            <a href="https://linkedin.com/in/yushahuazara" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-skin hover:text-gray-700">
              <Linkedin size={24} />
            </a>
          </motion.div>

          {/* custom python code block */}
          <div className="mt-12 p-6 rounded-lg shadow-lg items-center">
            <pre className="text-left text-sm md:text-base text-gray-900 dark:text-white transition duration-500">
              <code className="language-python">
                {`
class Developer():
      """ Dev Model
      """

      def __init__(self) -> None:
          """ Initialise Dev model with default
              values
          """
          self.name = "Yushahu Yussif"
          self.alias = "Azara"
          self.skills = [
               "Python",
               "Django",
               "JavaScript",
               "React"
          ]
`}
              </code>
            </pre>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
