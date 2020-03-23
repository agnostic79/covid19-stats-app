import React, { useState, useEffect } from "react";

const useData = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(url) {
    setLoading(true);
    setError(null);
    setData([]);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        setLoading(false);
        setData(json);
      } else {
        const err = await res.json();
        throw new Error(err.error.message);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {
    data,
    loading,
    error
  };
};

export default useData;
