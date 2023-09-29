import { useState } from "react";
import useVenue from "../../../../hooks/useVenue";
import VenueManagement from "../../../../components/forms/VenueManagement";
import VenueDetails from "../../VenueDetails";
import BookingManagement from "./BookingManagement";
import * as S from "./index.styles";
import useFeedback from "../../../../hooks/useFeedback";
import Feedback from "../../../../components/Feedback";

export default function AdminView({
  id,
  bookings,
  venueDetails,
  setVenueDetails,
  setIsShowingDeleteView,
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isShowingAdminView, setIsShowingAdminView] = useState(false);

  const { update } = useVenue();
  const { feedbackMessage, feedbackType, setFeedback } = useFeedback();

  const updateVenue = async (body) => {
    try {
      setIsDisabled(true);
      setFeedback("Loading ...", "info");
      const { fetchedUpdate, stringifiedUpdate } = await update(id, body);

      if (fetchedUpdate.ok) {
        setIsDisabled(false);
        setFeedback("Venue updated!");
        setVenueDetails((prevDetails) => ({
          ...stringifiedUpdate,
          owner: prevDetails.owner,
        }));
        setIsShowingAdminView(false);
      } else {
        setIsDisabled(false);
        setFeedback(stringifiedUpdate.errors[0].message, "error");
      }
    } catch (error) {
      setFeedback("Encountered error on update", "error");
    }
  };

  return (
    <S.AdminView>
      <div className="admin-controls-wrapper">
        <h1>Manage venue</h1>
        <div className="admin-controls">
          {!isShowingAdminView && (
            <button
              onClick={() => setIsShowingDeleteView(true)}
              disabled={isDisabled}
              className="base-button"
            >
              Delete venue
            </button>
          )}
          <button
            onClick={() => setIsShowingAdminView(!isShowingAdminView)}
            className="base-button"
          >
            {isShowingAdminView ? "Cancel update" : "Update venue"}
          </button>
        </div>
      </div>
      {isShowingAdminView ? (
        <VenueManagement
          venue={venueDetails}
          submitFunction={updateVenue}
          isDisabled={isDisabled}
        />
      ) : (
        <VenueDetails venue={venueDetails} isCustomerView={false} />
      )}
      <Feedback message={feedbackMessage} status={feedbackType} />
      <BookingManagement bookings={bookings} />
    </S.AdminView>
  );
}
