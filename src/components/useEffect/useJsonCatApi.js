import React, { useEffect, useState } from "react";
import { JSON_API_CAT } from "./Context";

const useJsonCatApi = () => {
  const [categories, setCatrgories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(JSON_API_CAT);
        const json = await data.json();
        console.log("Catogries", json);
        setCatrgories(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { categories, error, loading };
};



export default useJsonCatApi;
