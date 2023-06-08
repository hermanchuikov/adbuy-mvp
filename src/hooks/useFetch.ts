import { useState } from 'react';

export const useFetch = (cb: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    try {
      setLoading(true);
      await cb();
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {fetchData, loading, error}
};
