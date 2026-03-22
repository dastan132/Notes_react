import React, { useEffect, useState } from "react";
import useJsonApi from "./useJsonApi";
import useJsonCatApi from "./useJsonCatApi";
import Categories from "./Categories";
import { Products } from "./Products";
import Pagination from "./Pagination";

const JsonDummy = () => {
  const {
    products,
    loading: prodLoading,
    error: prodError,
    currentpage,
    postPerPage,
    setCurrentPage,
  } = useJsonApi();

  const {
    categories,
    loading: catLoading,
    error: catError,
  } = useJsonCatApi();

  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, setCurrentPage]);

  if (prodLoading || catLoading) return <p>Loading...</p>;
  if (prodError || catError) return <p>Error: {prodError || catError}</p>;


  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;


  const lastPostIndex = currentpage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <Products products={currentPosts} />

      <Pagination
        totalPosts={filteredProducts.length}
        postPerPage={postPerPage}
        currentpage={currentpage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default JsonDummy;