import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setIsLoading(false);
      setData(result);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { isLoading, data, isError };
};
