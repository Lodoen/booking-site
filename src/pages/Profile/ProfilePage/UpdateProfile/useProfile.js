import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

export default function useProfile() {
  const { user } = useContext(UserContext);
  const url = import.meta.env.VITE_API_URL + `/profiles/${user.name}`;

  const update = async (body) => {
    try {
      const fetchedUpdate = await fetch(url + "/media", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(body),
      });
      const stringifiedUpdate = await fetchedUpdate.json();
      return { fetchedUpdate, stringifiedUpdate };
    } catch (error) {
      return undefined;
    }
  };

  return {
    update,
  };
}
