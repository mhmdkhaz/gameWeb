import { useState, useEffect } from "react";
import axios from "axios";

function UseFetchGet(getURL, id) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(getURL, {
          method: "GET",
          params: { platform: "pc", id: id },
          headers: {
            "X-RapidAPI-Key":
              "effdaf861emsh234a6d980ee6076p1a12a5jsn90056417ed48",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [getURL, id]);

  return [data, isLoading, error];
}

export default UseFetchGet;
