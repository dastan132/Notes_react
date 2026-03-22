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
    <div>
      {pages.map((page) => (
        <button
          className=" cursor-pointer bg-amber-400"
          key={page}
          onClick={() => setCurrentPage(page)}
          style={{
            margin: "5px",
            padding: "5px 10px",
            fontWeight: currentpage === page ? "bold" : "normal",
            backgroundColor: currentpage === page ? "#ddd" : "#fff",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
