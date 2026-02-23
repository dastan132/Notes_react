import React from "react";
import Props from "./Props/Props";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" bg-gray-600">
    <Link to="/">
        <button className=" m-2 px-2 py-2 bg-gray-400 text-lg font-bold rounded-lg cursor-pointer hover:bg-amber-200 "> Body</button>
      </Link>
      <Link to="/props">
        <button className=" m-2 px-2 py-2 bg-gray-400 text-lg font-bold rounded-lg cursor-pointer hover:bg-amber-200 ">Props</button>
      </Link>
      <Link to="/user">
        <button className=" m-2 px-2 py-2 bg-gray-400 text-lg font-bold rounded-lg cursor-pointer hover:bg-amber-200 ">User</button>
      </Link>
      <Link to="/maprender">
        <button className=" m-2 px-2 py-2 bg-gray-400 text-lg font-bold rounded-lg cursor-pointer hover:bg-amber-200 ">MapRender</button>
      </Link>
      <Link to="/useRef">
        <button className=" m-2 px-2 py-2 bg-gray-400 text-lg font-bold rounded-lg cursor-pointer hover:bg-amber-200 ">UseRef</button>
      </Link>
      <Link to="/memo">
        <button className=" m-2 px-2 py-2 bg-gray-400 text-lg font-bold rounded-lg cursor-pointer hover:bg-amber-200 ">UseMemo</button>
      </Link>
      <Link to="/callback">
        <button className=" m-2 px-2 py-2 bg-gray-400 text-lg font-bold rounded-lg cursor-pointer hover:bg-amber-200 ">UseCallBackFn</button>
      </Link>
      <Link to="/jsondummy">
        <button className=" m-2 px-2 py-2 bg-gray-400 text-lg font-bold rounded-lg cursor-pointer hover:bg-amber-200 ">DummyApi</button>
      </Link>
      
    </div>
  );
};

export default NavBar;
