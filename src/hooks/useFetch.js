import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.items);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, error };
};

export default useFetch;
