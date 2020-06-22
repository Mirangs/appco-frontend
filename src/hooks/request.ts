import { useState, useEffect } from 'react';

export interface UseRequestOptions {
  body?: BodyInit | null;
  method?: string;
  headers?: HeadersInit;
}

export interface UseRequestReturnValue {
  data: any;
  loading: boolean;
  error: null | string | object;
}

export type UseRequest = (
  url: string,
  options?: UseRequestOptions
) => UseRequestReturnValue;

export const useRequest: UseRequest = (
  url,
  options = {
    body: null,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);

  const { body, method, headers } = options;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await (await fetch(url, { method, body, headers })).json();
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    loading,
    data,
  };
};

export type UseLazyRequest = () => UseLazyRequestReturnValue;
export type UseLazyRequestReturnValue = [FetchFn, UseRequestReturnValue];
export type FetchFn = (url: string, options?: UseRequestOptions) => void;

export const useLazyRequest: UseLazyRequest = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);

  const fetchData: FetchFn = async (
    url,
    options = {
      body: null,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  ) => {
    const { body, method, headers } = options;
    setLoading(true);

    try {
      const res = await (await fetch(url, { method, body, headers })).json();
      setData(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, { error, loading, data }];
};
