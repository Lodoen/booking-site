import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import VenueManagement from "../../components/forms/VenueManagement";
import useVenue from "../../hooks/useVenue";
import useFeedback from "../../hooks/useFeedback";
import Feedback from "../../components/Feedback";

export default function Create() {
  const { user } = useContext(UserContext);
  const { create } = useVenue();
  const navigate = useNavigate();
  const { feedbackMessage, feedbackType, setFeedback } = useFeedback();

  const createVenue = async (body) => {
    try {
      setFeedback("Loading ...", "info");
      const { fetchedCreate, stringifiedCreate } = await create(body);

      if (fetchedCreate.ok) {
        setFeedback("Venue created!");
        setTimeout(() => {
          navigate(`/venue/${stringifiedCreate.id}`);
        }, 1500);
      } else {
        setFeedback(stringifiedCreate.errors[0].message, "error");
      }
    } catch (error) {
      console.log(error);
      setFeedback("Encountered error on create", "error");
    }
  };

  return user && user.venueManager ? (
    <section>
      <VenueManagement submitFunction={createVenue} />
      <Feedback message={feedbackMessage} status={feedbackType} />
    </section>
  ) : (
    <div>You have to be a venue manager to create venues</div>
  );
}
