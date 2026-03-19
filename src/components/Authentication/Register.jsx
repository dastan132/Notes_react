import React from "react";

const Register = () => {
  const handleSubbmit = () => {};
  return (
    <form onSubmit={(e) => e.preventDefault()} className="m-4 p-4 bg-black rounded-2xl text-white">
      <div className="m-2 p-2 flex justify-items-center font-bold">Register</div>
      <input
        className="m-2 p-2 bg-white rounded-sm text-black"
        name="username"
        type="name"
        placeholder="Enter name"
      />
      <input
        className="m-2 p-2 bg-white rounded-sm text-black"
        name="email"
        type="email"
        placeholder="Enter email"
      />
      <input
        className="m-2 p-2 bg-white rounded-sm text-black"
        name="password"
        type="password"
        placeholder="Enter password"
      />
      <button
        onClick={handleSubbmit}
        className="m-2 p-2 bg-white text-black rounded-sm cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Register;
