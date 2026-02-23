import React, { useEffect } from "react";
import { JSON_API } from "./Context";

const useJsonApi = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(JSON_API);
        const json = await data.json();
        console.log("main",json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
};

export default useJsonApi;
