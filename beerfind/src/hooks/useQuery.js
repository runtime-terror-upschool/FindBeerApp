import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import axios from "axios";

function useQuery(url, query) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const fetchSearchData = async (query) => {
    if (query && query.length > 0) {
      const parsedQuery = query.replaceAll(" ", "+");
      const qurl = `${url}/beers?beer_name=${parsedQuery}`;
      try {
        const response = await axios.get(qurl);
        return response.data;
      } catch (err) {
        setLoading(false);
        setError(err.message);
        return [];
      }
    }
  };
  const fetchData = async (query, cb) => {
    const res = await fetchSearchData(query);
    cb(res);
  };
  const debouncedFetchData = debounce((query, cb) => {
    fetchData(query, cb);
  }, 1000);

  useEffect(() => {
    debouncedFetchData(query, (res) => {
      setResults(res);
    });
  }, [query]);

  return { error, loading, results };
}
export default useQuery;
