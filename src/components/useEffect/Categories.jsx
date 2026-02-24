import React from "react";

const Categories = ({ categories, selectedCategory, onSelectCategory }) => {
  const handleClick = (slug) => {

    onSelectCategory(selectedCategory === slug ? null : slug);
  };

  return (
    <div>
      <h2 className="m-2 p-2 font-bold text-2xl">
        Categories ({categories.length})
      </h2>
      <div className="flex flex-wrap gap-2 mt-2">


        <div
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 border-2 rounded-full cursor-pointer transition-colors
            ${!selectedCategory
              ? "bg-blue-600 text-white border-blue-600"
              : "border-blue-300 text-blue-700 hover:bg-blue-300 hover:border-blue-700"
            }`}
        >
          All
        </div>

        {categories.map((cat) => (
          <div
            key={cat.slug}
            onClick={() => handleClick(cat.slug)}
            className={`px-4 py-2 border-2 rounded-full cursor-pointer transition-colors
              ${selectedCategory === cat.name
                ? "bg-blue-600 text-white border-blue-600"
                : "border-blue-300 text-blue-700 hover:bg-blue-300 hover:border-blue-700"
              }`}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;