import { useState } from "react";
import useVenue from "../../../../hooks/useVenue";
import VenueManagement from "../../../../components/forms/VenueManagement";
import VenueDetails from "../../VenueDetails";
import BookingManagement from "./BookingManagement";
import * as S from "./index.styles";

export default function AdminView({ id, restOfVenue, setIsShowingDeleteView }) {
  const { bookings, ...details } = restOfVenue;

  const [venueDetails, setVenueDetails] = useState(details);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isShowingAdminView, setIsShowingAdminView] = useState(false);

  const { update } = useVenue();

  const updateVenue = async (body) => {
    try {
      setIsDisabled(true);
      setShowFeedback("Loading ...");
      const { fetchedUpdate, stringifiedUpdate } = await update(id, body);

      if (fetchedUpdate.ok) {
        setIsDisabled(false);
        setShowFeedback("Venue updated!");
        setVenueDetails(stringifiedUpdate);
      } else {
        setIsDisabled(false);
        setShowFeedback(stringifiedUpdate.errors[0].message);
      }
    } catch (error) {
      console.log(error);
      setShowFeedback("Encountered error on update");
    }
  };

  return (
    <S.AdminView>
      <div className="admin-controls-wrapper">
        <h1>Manage venue</h1>
        <div className="admin-controls">
          <button
            onClick={() => setIsShowingDeleteView(true)}
            disabled={isDisabled}
          >
            Delete venue
          </button>
          <button onClick={() => setIsShowingAdminView(!isShowingAdminView)}>
            Update venue
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
      {showFeedback && <div>{showFeedback}</div>}
      <BookingManagement bookings={bookings} />
    </S.AdminView>
  );
}
