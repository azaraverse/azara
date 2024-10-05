import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";

const TypingCodeBlock = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const code = `
  class Developer():
      """ Dev Model
      """

      def __init__(self) -> None:
          """ Initialise Dev Model with default values
          """
          self.name = "Yushahu Yussif"
          self.alias = "Azara"
          self.skills = [
              "Python",
              "Django",
              "JavaScript",
              "React"
          ]

      def __str__(self) -> str:
          """ String representation of Dev Model
          """
          return self.name
`;

  useEffect(() => {
    // create a typing effect
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode((prev) => prev + code[index]);
        index += 1;
      } else {
        clearInterval(intervalId);
        setIsTypingComplete(true);
      }
    }, 8);

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  useEffect(() => {
    if (isTypingComplete) {
      Prism.highlightAll();
    }
  }, [isTypingComplete]);

  return (
    <div className="mt-12 p-6 rounded-lg items-center">
      <pre className="text-left text-sm md:text-base text-gray-900 dark:text-white transition-colors duration-500">
        <code className="language-python typed-code">{displayedCode}</code>
      </pre>
    </div>
  )
}

export default TypingCodeBlock;
