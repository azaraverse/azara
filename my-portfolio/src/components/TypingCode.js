import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const TypingCodeBlock = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [,setIsTypingComplete] = useState(false);

  const code =
`class Developer():
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
  }, [code]);

  return (
    <div className="mt-12 p-6 rounded-lg items-center">
      <MonacoEditor
        height="400px"
        language="python"
        theme="vs-dark"
        value={displayedCode}
        options={{
          readOnly: true,
          automaticLayout: true,
          wordWrap: "off",
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          padding: { top: 20, bottom: 0 }
        }}
      />
    </div>
  )
}

export default TypingCodeBlock;
