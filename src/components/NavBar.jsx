import React from "react";
import { Link, useLocation } from "react-router-dom";

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
];

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-stone-950 border-b border-stone-800 px-6 py-0 flex items-center gap-1 overflow-x-auto">
      {/* Logo mark */}
      <span className="text-amber-500 font-black text-lg tracking-tighter mr-4 shrink-0">
        ⬡ DEV
      </span>

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
              {/* Active underline */}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500" />
              )}
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
