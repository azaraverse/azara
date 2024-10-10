import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ skillsArray }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // Speed for typing/deleting

  // Handle typing and deleting effect
  useEffect((words=skillsArray) => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedWord === currentWord) {
      // Word is fully typed, start deletion after a pause
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedWord === "") {
      // Word is fully deleted, move to the next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length); // Cycle through words
    }

    const handleTyping = setTimeout(() => {
      if (!isDeleting) {
        // Add a character for typing
        setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
        setSpeed(150); // Typing speed
      } else {
        // Remove a character for deleting
        setDisplayedWord(currentWord.slice(0, displayedWord.length - 1));
        setSpeed(150); // Deletion speed
      }
    }, speed);

    return () => clearTimeout(handleTyping);
  }, [speed, displayedWord, isDeleting, currentWordIndex, skillsArray]);

  return (
    <motion.p
      className="text-center max-w-lg mx-auto mb-8"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      I am a developer with experience in{" "}
      <span className="text-blue-700 dark:text-blue-400 transition-colors duration-500">backend</span> and{" "}
      <span className="text-blue-700 dark:text-blue-400 transition-colors duration-500">frontend</span> technologies, focused on
      building experiences with <span className="text-blue-700 dark:text-blue-400 transition-colors duration-500 font-mono">{displayedWord}</span>.
    </motion.p>
  );
};

export default TypingEffect;
