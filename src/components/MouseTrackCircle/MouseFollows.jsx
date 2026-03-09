import React, { useEffect, useRef } from "react";
import Circle from "./Circle";

const MouseFollows = () => {
  const circleRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });  // real mouse position
  const pos = useRef({ x: 0, y: 0 });    // circle's current position

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08;

      circleRef.current.style.left = pos.current.x + "px";
      circleRef.current.style.top = pos.current.y + "px";
    }, 16);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-screen h-screen">
      <Circle ref={circleRef} />
    </div>
  );
};

export default MouseFollows;