import { useState, useEffect } from "react";

export default function useReadProfile(name = "", accessToken = "") {
  const url =
    import.meta.env.VITE_API_URL +
    `/profiles/${name}?_bookings=true&_venues=true`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url, accessToken]);
  return { data, isLoading, isError };
}
