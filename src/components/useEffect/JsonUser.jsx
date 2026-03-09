import React, { useState } from "react";
import useUserApi from "./useUserApi";
import { useNavigate, useParams } from "react-router-dom";

const JsonUser = () => {
  const { id } = useParams();
  const user = useUserApi(id);
  const [inputId, setInputId] = useState(id || "");
  const navigate = useNavigate();
  const handleClick = () => {
    if (inputId) navigate(`/jsonuser/${inputId}`);
  };
  const handleUser = (e) => {
    setInputId(e.target.value);
  };

  if (!user) return <h2>Error</h2>;
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="flex gap-2 mb-8">
          <input
            value={inputId}
            onChange={handleUser}
            placeholder="Enter user ID..."
            className="flex-1 bg-transparent border border-amber-500/50 focus:border-amber-400 outline-none text-amber-100 placeholder-stone-600 px-1 py-2 text-sm tracking-widest transition-colors duration-300"
          />
          <button
            onClick={handleClick}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Search
          </button>
        </div>

        <div className="relative border border-stone-800 bg-stone-900/60 backdrop-blur p-8">
          <div className="absolute top-0 left-0 w-16 h-0.5 bg-amber-500" />

          <div className="mb-1 text-stone-600 text-xs tracking-[0.3em] uppercase">
            User Profile
          </div>
              <img src={user?.image} alt="ID Image" />

          <h2 className="text-3xl font-black text-amber-100 tracking-tight mb-6">
            {user?.firstName}{" "}
            <span className="text-amber-500">{user?.lastName}</span>
          </h2>

          <div className="space-y-3 border-t border-stone-800 pt-5">
            <div className="flex items-center gap-3">
              <span className="text-stone-600 text-xs tracking-widest w-14 uppercase">
                Email
              </span>
              <span className="text-stone-300 text-sm">{user?.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-stone-600 text-xs tracking-widest w-14 uppercase">
                Phone
              </span>
              <span className="text-stone-300 text-sm">{user?.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonUser;
