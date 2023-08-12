import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      setState((oldState) => ({ ...oldState, isLoading: true }));

      const resp = await fetch(url);
      const data = await resp.json();

      setState({
        data,
        isLoading: false,
        error: null,
      });
    };
    getFetch();
  }, [url]);

  return {
    ...state,
  };
};
