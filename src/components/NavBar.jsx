import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "./Authentication/useAuth";

const links = [
  { to: "/", label: "Body" },
  { to: "/props", label: "Props" },
  { to: "/user", label: "User" },
  { to: "/maprender", label: "MapRender" },
  { to: "/useRef", label: "UseRef" },
  { to: "/memo", label: "UseMemo" },
  { to: "/callback", label: "UseCallback" },
  { to: "/jsondummy", label: "DummyApi" },
  { to: "/jsonuser/1", label: "UseParams" },
  { to: "/mouse", label: "Mouse Follower" },
  { to: "/reducer", label: "UseReduce" },
  { to: "/accordion", label: "Accordion" },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-stone-950 border-b border-stone-800 px-6 py-0 flex items-center gap-1 overflow-x-auto">
      <span className="text-amber-500 font-black text-lg tracking-tighter mr-4 shrink-0">
        ⬡ DEV
      </span>
      {isLoggedIn && (
        <div className="flex gap-1">
          {links.map(({ to, label }) => {
            const isActive =
              pathname === to || (to !== "/" && pathname.startsWith(to));
            return (
              <Link key={to} to={to}>
                <button
                  className={`relative px-3 py-4 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 whitespace-nowrap
                ${
                  isActive
                    ? "text-amber-400"
                    : "text-stone-500 hover:text-stone-200"
                }`}
                >
                  {label}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500" />
                  )}
                </button>
              </Link>
            );
          })}
        </div>
      )}

      <div className="ml-auto">
        {!isLoggedIn ? (
          <Link to="/login">
            <button className="px-3 py-2 text-xs font-semibold uppercase text-white bg-amber-500 rounded hover:bg-amber-400 cursor-pointer">
              Login
            </button>
          </Link>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
