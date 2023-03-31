const { useState } = require("react");

///  Replace this code with your version of useVisualMode

const useVisualMode = function(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode, replace = false) {
    setMode(newMode);
    if (!replace) {
      setHistory([...history, newMode]);
    }
  }

  const back = function() {
    if (history.length > 1) {
      const copyHistory = [...history];
      copyHistory.pop();
      setHistory(copyHistory);
      setMode(copyHistory[copyHistory.length - 1]);
    }
  }
  // Don't forget this -> history is needed here
  return { mode, transition, back, history };
};

export default useVisualMode;