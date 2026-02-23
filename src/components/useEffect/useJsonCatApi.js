import React, { useEffect } from "react";
import { JSON_API_CAT } from "./Context";

const useJsonCatApi = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(JSON_API_CAT);
        const json = await data.json();
        console.log("Catogries", json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
};

export default useJsonCatApi;
