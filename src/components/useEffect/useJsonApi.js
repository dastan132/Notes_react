import React, { useEffect, useState } from "react";
import { JSON_API } from "./Context";

const useJsonApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(JSON_API);
        const json = await data.json();
        console.log("main", json.products);
        setProducts(json.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { products, error, loading };
};

export default useJsonApi;
