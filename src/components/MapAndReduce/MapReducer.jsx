import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Apple",
    price: 65,
    qty: 3,
  },
  {
    id: 2,
    name: "Banana",
    price: 15,
    qty: 6,
  },
  {
    id: 3,
    name: "Mango",
    price: 25,
    qty: 4,
  },
  {
    id: 4,
    name: "Grapes",
    price: 85,
    qty: 100,
  },
];

const MapReducer = () => {
  const [showExpensive, setShowExpensive] = useState(false);

  const filteredProducts = showExpensive
    ? products.filter((pro) => pro.price > 20)
    : products;
  const total = products.reduce((acc, pro) => acc + pro.price * pro.qty, 0);
  return (
    <>
      <button
        className=" mx-4 my-4 p-4 rounded-2xl  bg-gray-400 hover:bg-gray-600 font-bold text-2xl cursor-pointer"
        onClick={() => setShowExpensive(!showExpensive)}
      >
        Filter
      </button>
      {filteredProducts.map((pro) => (
        <div
          className=" mx-4 my-4 p-4 rounded-2xl cursor-pointer font-bold text-2xl gap-1.5 bg-gray-400 hover:bg-gray-600 "
          key={pro.id}
        >
          <h1>Name: {pro.name}</h1>
          <p>ID: {pro.id}</p>
          <p>Price: ${pro.price}</p>
          <p>Quantity: {pro.qty}</p>
        </div>
      ))}
      <p className="mx-4 my-4 p-4 bg-amber-900 rounded-2xl font-bold text-2xl">
        Total: {total}
      </p>
    </>
  );
};

export default MapReducer;
