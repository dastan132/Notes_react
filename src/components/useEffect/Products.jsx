import React from "react";

export const Products = ({ products }) => {
  if (!products.length) return <p className="m-4 p-2 text-gray-400">No products found.</p>;

  return (
    <div className="m-4">
      <h2 className="m-2 p-2 font-bold text-2xl">
        Products ({products.length})
      </h2>

      <div className="m-2 p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-gray-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className=""
            />

            <div className="p-3 flex flex-col gap-1">
              <p className="font-semibold text-sm text-gray-800 leading-tight line-clamp-2">
                {product.title}
              </p>

              <p className="text-xs text-gray-400 uppercase tracking-wide">
                {product.category}
              </p>

              <div className="flex justify-between items-center mt-1">
                <span className="text-green-600 font-bold">
                  ${product.price}
                </span>

                <span className="text-yellow-500 text-sm font-semibold">
                  ★ {product.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};