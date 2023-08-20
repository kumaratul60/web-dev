import { useCallback, useMemo, useState } from "react";
import { findNthPrime } from "../../../utils/constants";

/**
 * useMemo is a hook that takes a function and a list of dependencies as arguments, and returns a value that is the result of calling the function. The value is stored in a cache and is only re-computed if one of the dependencies has changed.
 * UseMemo is a react component that helps you keep track of your memory usage

syntax: useMemo(calculateValue, dependencies)

Usage:

  * Skipping expensive recalculations
  * Skipping re-rendering of components
  * Memoizing a dependency of another Hook
  * Memoizing a function

 */

const MemoLearn = () => {
  const [text, setText] = useState("");
  const [theme, setTheme] = useState(false);

  // const prime = findNthPrime(text);

  // const primeFn = ()=> {
  //   console.log("calculating prime of " + text);
  //   return findNthPrime(text);
  // }
  const primeMemo = useMemo(() => findNthPrime(text), [text]);

  const handleTheme = (text) => {
    setTheme(!theme);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        className={` flex border w-6/12 h-96 p-2 rounded-lg shadow-lg ${
          theme ? "bg-black" : "bg-slate-200"
        } ${theme ? "text-white" : ""}`}
      >
        <h1 className="text-xl font-mono self-end">Memo</h1>

        <div>
          <input
            className="p-2 m-1 rounded-lg focus:outline-none"
            type="number"
            value={text}
            placeholder="text..."
            onChange={(e) => setText(e.target.value)}
            aria-label="Enter a number"
          />

          <h1 className="text-xl font-mono">nth prime: {primeMemo}</h1>
        </div>

        <div>
          <button
            className="px-3 m-2 py-2 bg-green-500 rounded-lg"
            onClick={handleTheme}
          >
            Change theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoLearn;
