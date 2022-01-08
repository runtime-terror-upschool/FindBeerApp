/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(url, page) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data: resData } = await axios.get(url);
      setData(resData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }, [page]);
  // eslint-disable-next-line
  useEffect(() => {
    fetchData();
  }, [url]);

  return { error, loading, data };
}
export default useFetch;
