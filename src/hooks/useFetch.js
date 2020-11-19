import { useEffect, useRef, useState } from "react";

const useFecth = (url, loading) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading, error: null });

  useEffect(() => {
    // cleanup
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      });
  }, [url]);

  return {
    state,
  };
};

export default useFecth;
