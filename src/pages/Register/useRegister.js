import { useState, useEffect } from "react";

export default function useRegister(userInfo) {
  const url = import.meta.env.VITE_API_URL + "/auth/register";
  const [account, setAccount] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        const json = await fetchedData.json();
        setAccount(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url, userInfo]);
  return { account, isLoading, isError };
}
