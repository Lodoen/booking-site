import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useBooking() {
  const url = import.meta.env.VITE_API_URL + "/bookings";
  const { user } = useContext(UserContext);

  const create = async (body) => {
    try {
      const fetchedUpdate = await fetch(url, {
        method: "POST",
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

  const remove = async (id) => {
    try {
      const fetchedRemove = await fetch(url + `/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      return { fetchedRemove };
    } catch (error) {
      return undefined;
    }
  };

  return {
    create,
    remove,
  };
}
