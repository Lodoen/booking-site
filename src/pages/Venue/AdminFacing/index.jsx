import { useState } from "react";
import VenueManagement from "../../../components/forms/VenueManagement";
import useVenue from "../../../hooks/useVenue";
import VenueDetails from "../VenueDetails";
import BookingManagement from "./BookingManagement";
import * as S from "./index.styles";

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
        setIsDisabled(false);
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
    <S.AdminSection>
      {isShowingDeleteView ? (
        <div>
          {isDeleted ? (
            <div>
              <h1>Venue deleted</h1>
            </div>
          ) : (
            <div>
              <h1>Delete venue?</h1>
              <p>
                Are you sure you want to delete the venue? This action is
                irreversible.
              </p>
              <button
                onClick={() => removeVenue()}
                className="delete-view-button"
              >
                I`m sure, delete the venue
              </button>
              <button
                onClick={() => setIsShowingDeleteView(false)}
                className="delete-view-button"
              >
                No, back to venue page
              </button>
              {showRemoveFeedback && <div>{showRemoveFeedback}</div>}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="admin-controls-wrapper">
            <h1>Manage venue</h1>
            <div className="admin-controls">
              <button
                onClick={() => setIsShowingDeleteView(true)}
                disabled={isDisabled}
              >
                Delete venue
              </button>
              <button
                onClick={() => setIsShowingAdminView(!isShowingAdminView)}
              >
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
            <VenueDetails venue={venueDetails} />
          )}
          {showFeedback && <div>{showFeedback}</div>}
          <BookingManagement bookings={bookings} />
        </div>
      )}
    </S.AdminSection>
  );
}
