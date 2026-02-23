import React, { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const [x, setX] = useState(0);
  let y = 0;
  const z = useRef(0);
  const i = useRef(null);

  useEffect(() => {
    if (i.current) return;
    i.current = setInterval(() => {
      console.log("React", Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="mx-4 my-4 p-4 font-bold text-2xl flex justify-center gap-4">
      <div className="bg-gray-100 p-4 rounded">
        <button
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => setX(x + 1)}
        >
          Increment x
        </button>
        <span>State x: {x}</span>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <button
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => {
            y = y + 1;
            console.log("let", y);
          }}
        >
          Increment y
        </button>
        <span>State y: {y}</span>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <button
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
          onClick={() => {
            z.current = z.current + 1;
            console.log("ref", z.current);
          }}
        >
          Increment z
        </button>
        <span>Ref z: {z.current}</span>
      </div>
      <button
        onClick={() => clearInterval(i.current)}
        className="p-2 m-2 text-white rounded-lg text-2xl font-bold bg-amber-900 cursor-pointer hover:bg-amber-600"
      >
        Stop Printing
      </button>
    </div>
  );
};

export default UseRefExample;
