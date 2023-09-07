import { useState } from "react";
import VenueManagement from "../../../components/forms/VenueManagement";
import useVenue from "../../../hooks/useVenue";
import VenueDetails from "../VenueDetails";
import BookingManagement from "./BookingManagement";

export default function AdminFacing({ venue }) {
  const { id, bookings, ...restOfVenue } = venue;
  const [venueDetails, setVenueDetails] = useState(restOfVenue);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showRemoveFeedback, setShowRemoveFeedback] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isShowingAdminView, setIsShowingAdminView] = useState(false);
  const [isShowingDeleteView, setIsShowingDeleteView] = useState(false);

  const { update, remove } = useVenue();

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
        setShowFeedback(stringifiedUpdate.errors[0].message);
      }
    } catch (error) {
      console.log(error);
      setShowFeedback("Encountered error on update");
    }
  };

  const removeVenue = async () => {
    try {
      setIsDisabled(true);
      setShowRemoveFeedback("Loading ...");
      const { fetchedRemove } = await remove(id);

      if (fetchedRemove.ok) {
        setIsDeleted(true);
      } else {
        setShowRemoveFeedback("We encountered error on remove");
      }
    } catch (error) {
      console.log(error);
      setShowRemoveFeedback("Encountered error on remove");
    }
  };

  return (
    <div>
      <h1>Admin facing</h1>
      <div>
        <button
          onClick={() => setIsShowingDeleteView(!isShowingDeleteView)}
          disabled={isDisabled}
        >
          Delete venue
        </button>
      </div>
      {isShowingDeleteView ? (
        <div>
          {isDeleted ? (
            <div>
              <h2>Venue deleted</h2>
            </div>
          ) : (
            <div>
              <h2>Delete venue?</h2>
              <p>
                Are you sure you want to delete the venue? This action is
                irreversible.
              </p>
              <button onClick={() => removeVenue()}>
                I`m sure, delete the venue
              </button>
              {showRemoveFeedback && <div>{showRemoveFeedback}</div>}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div>
            <button onClick={() => setIsShowingAdminView(!isShowingAdminView)}>
              Update venue
            </button>
          </div>
          {isShowingAdminView ? (
            <VenueManagement
              venue={venueDetails}
              submitFunction={updateVenue}
              isDisabled={isDisabled}
            />
          ) : (
            <VenueDetails venue={venueDetails} />
          )}
          {showFeedback && <div>{showFeedback}</div>}
          <BookingManagement bookings={bookings} />
        </div>
      )}
    </div>
  );
}
