import { useCallback, useState } from 'react';
import Loading from '../components/Loading';

type LoadingResponse = {
  loading: boolean;
  wrap: <T extends unknown>(promise: Promise<T>) => Promise<T>;
  Loading: () => JSX.Element;
};

export default function useLoading(message: string): LoadingResponse {
  const [loading, setLoading] = useState(false);

  const wrap = useCallback(
    <T extends unknown>(promise: Promise<T>): Promise<T> => {
      setLoading(true);
      return new Promise((res, reject) => {
        promise
          .then(response => {
            setLoading(false);
            res(response);
          })
          .catch(err => {
            setLoading(false);
            reject(err);
          });
      });
    },
    [setLoading]
  );

  return {
    loading,
    wrap,
    Loading: () => (loading ? <Loading message={message} /> : <></>),
  };
}
