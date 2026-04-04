import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [show, setShow] = useState(null);

  const handleClick = (index) => {
    setShow(show === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {items?.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => handleClick(index)}
            className="w-full text-left p-4 font-semibold text-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            {item.title}
          </button>

          <div
            className={`px-4 transition-all duration-300 ${
              show === index ? "max-h-40 py-4" : "max-h-0 overflow-hidden"
            }`}
          >
            <p className="text-gray-700">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;