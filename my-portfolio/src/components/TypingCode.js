import React, { useEffect, useState, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";

const TypingCodeBlock = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const codeRef = useRef(null);

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
`.trim();

  useEffect(() => {
    // create a typing effect
    let isMounted = true;
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < code.length && isMounted) {
        setDisplayedCode(code.slice(0, index + 1));
        index += 1;
      } else {
        clearInterval(intervalId);
        if (isMounted) {
          setIsTypingComplete(true);
        }
      }
    }, 10);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    }; // cleanup on unmount
  }, []);

  useEffect(() => {
    if (isTypingComplete && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [isTypingComplete]);

  return (
    <div className="mt-12 p-6 rounded-lg items-center">
      <pre className="text-left text-sm md:text-base text-gray-900 dark:text-white transition-colors duration-500">
        <code ref={codeRef} className="language-python typed-code">{displayedCode}</code>
      </pre>
    </div>
  )
}

export default TypingCodeBlock;
