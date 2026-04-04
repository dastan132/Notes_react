import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;

    default:
      return state;
  }
};
const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={state.name}
        placeholder="Enter name"
      />
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={state.email}
        placeholder="Enter email"
      />
      <h1>Name: {state.name}</h1>
      <h1>Email: {state.email}</h1>
      <button onClick={() => dispatch({ type: "RESET" })}></button>
    </div>
  );
};

export default Form;
