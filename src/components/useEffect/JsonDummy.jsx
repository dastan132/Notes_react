import React, { useState } from "react";
import useJsonApi from "./useJsonApi";
import useJsonCatApi from "./useJsonCatApi";
import Categories from "./Categories";
import { Products } from "./Products";

const JsonDummy = () => {
  const { products, loading: prodLoading, error: prodError } = useJsonApi();
  const { categories, loading: catLoading, error: catError } = useJsonCatApi();
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (prodLoading || catLoading) return <p>Loading...</p>;
  if (prodError || catError) return <p>Error: {prodError || catError}</p>;
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;
  return (
    <div>
      <Categories 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} />
      <Products products={filteredProducts} />
    </div>
  );
};

export default JsonDummy;
