import React, { useCallback, useState } from "react";
import Other from "./Other";


const CallBackFn = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [other, setOther] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleOther = useCallback(() => {
    setOther((prev) => prev + 1);
  }, []);

  return (
    <div>
      <input
      className="flex justify-center m-4 p-2 border border-purple-950 rounded-lg text-2xl"
        onChange={handleChange}
        value={text}
        placeholder="Enter Here"
        type="text"
      />

      <button
        onClick={handleClick}
        className="p-2 m-2 rounded-lg font-bold text-2xl bg-green-700 hover:bg-green-900 cursor-pointer"
      >
        Incremnet Count
      </button>
      <span className="p-2 m-2 font-bold text-lg ">{count}</span>
      <Other onSomething={handleOther} other={other} />
    </div>
  );
};

export default CallBackFn;
