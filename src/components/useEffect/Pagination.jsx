import React from "react";

const Pagination = ({
  postPerPage,
  totalPosts,
  setCurrentPage,
  currentpage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap gap-2 mt-4 justify-center">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 rounded-md border transition duration-200
            ${
              currentpage === page
                ? "bg-blue-500 text-white font-bold border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;