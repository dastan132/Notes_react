import React, { useMemo, useState } from "react";
import { findNthPrime } from "./helper";

const Memo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text),[text])


  const handleClick = () =>{
    setDarkTheme(!isDarkTheme)
  } 

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (isDarkTheme && " bg-gray-900 text-white")
      }
    >
      <input
        className=" p-2 font-bold text-2xl border border-black w-72 rounded-2xl "
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className=" m-2 p-2 text-2xl font-bold">Nth Prime Number: {prime}</div>
      <button onClick={handleClick} className="p-2 m-2 rounded-lg bg-amber-400 hover:bg-amber-700 cursor-pointer font-bold">Dark</button>
    </div>
  );
};

export default Memo;
