import { useEffect, useState } from "react";
import { JSON_API } from "./Context";

const useJsonApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentpage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(JSON_API);
        const json = await res.json();
        setProducts(json.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    products,
    loading,
    error,
    currentpage,
    postPerPage,
    setCurrentPage,
  };
};

export default useJsonApi;