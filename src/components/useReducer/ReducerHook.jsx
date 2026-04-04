import React, { useReducer } from "react";
import Form from "./Form";

const ReducerHook = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
    <div className="p-4 m-4 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">{count}</h1>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </div>
      <Form />
      </>
  );
};

export default ReducerHook;
