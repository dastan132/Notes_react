import React from "react";
import Register from "./Register";
import useAuth from "./useAuth";

const Login = () => {
  const { login } = useAuth();
  const handleSubbmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <>
      <form
        onSubmit={handleSubbmit}
        className=" m-4 p-4 bg-black rounded-2xl text-white "
      >
        <div className=" m-2 p-2 flex justify-items-center font-bold ">
          Login{" "}
        </div>
        <div className="flex justify-items-center">
          <input
            className="m-2 p-2 bg-white rounded-sm text-black"
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <input
            className="m-2 p-2 bg-white rounded-sm text-black"
            name="password"
            type="passward"
            placeholder="Enter password"
          />
          <button
            className="m-2 p-2 bg-white text-black rounded-sm cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        <Register />
      </div>
    </>
  );
};

export default Login;
