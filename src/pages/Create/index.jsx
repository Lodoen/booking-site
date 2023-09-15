import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import VenueManagement from "../../components/forms/VenueManagement";
import useVenue from "../../hooks/useVenue";

export default function Create() {
  const { user } = useContext(UserContext);
  const { create } = useVenue();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState(undefined);

  const createVenue = async (body) => {
    try {
      setFeedback("Loading ...");
      const { fetchedCreate, stringifiedCreate } = await create(body);

      if (fetchedCreate.ok) {
        setFeedback("Venue created!");
        setTimeout(() => {
          navigate(`/venue/${stringifiedCreate.id}`);
        }, 1500);
      } else {
        setFeedback(stringifiedCreate.errors[0].message);
      }
    } catch (error) {
      console.log(error);
      setFeedback("Encountered error on update");
    }
  };

  return user && user.venueManager ? (
    <section>
      <VenueManagement submitFunction={createVenue} /> <p>{feedback}</p>
    </section>
  ) : (
    <div>You have to be a venue manager to create venues</div>
  );
}
