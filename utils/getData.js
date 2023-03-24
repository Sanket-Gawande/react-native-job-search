import { useEffect, useState } from "react";
import { API_KEY, API_HOST } from "@env";
export default function (endPoint, query) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };
  useEffect(() => {
    if (!data.length)
      fetch(
        `https://jsearch.p.rapidapi.com/${endPoint}?query=${query}&page=1&num_pages=1`,
        options
      )
        .then((data) => data.json())
        .then((data) => {
          setData(data.data);
          setLoading(false);
          if (data.status !== "OK") {
            setError("Something went wrong.");
          }
          console.log(data);
        })
        .catch((error) => {
          setError("Something went wrong.");
        });
  }, [endPoint]);

  return { data, loading, error };
}
