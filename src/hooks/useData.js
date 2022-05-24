import { useEffect, useState } from 'react';

export const useData = (apiFunction) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const funcResponse = await apiFunction();
        setData(funcResponse);
      } catch (err) {
        setIsError(true);
        setError(err?.toString() || 'Something went wrong!');
      }
      setIsLoading(false);
    };
    fetchData();
  }, [apiFunction]);

  return { data, isLoading, isError, error };
};
