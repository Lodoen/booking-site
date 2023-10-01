import { useContext, useState } from "react";
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
  const [isDisabled, setIsDisabled] = useState(false);

  const createVenue = async (body) => {
    try {
      setIsDisabled(true);
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
      setIsDisabled(false);
      setFeedback("Encountered error on create", "error");
    }
  };

  return user && user.venueManager ? (
    <section>
      <VenueManagement submitFunction={createVenue} isDisabled={isDisabled} />
      <Feedback message={feedbackMessage} status={feedbackType} />
    </section>
  ) : (
    <section>
      <h1>Not available</h1>
      <Feedback
        message="You have to be a venue manager to create venues"
        status="error"
      />
    </section>
  );
}
