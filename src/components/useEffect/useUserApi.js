import React, { useEffect, useState } from "react";
import { JSON_API_USER } from "./Context";

const useUserApi = (id) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!id) return;
    const userData = async () => {
      try {
        const responce = await fetch(JSON_API_USER(id));
        const data = await responce.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, [id]);
  return user;
};

export default useUserApi;
