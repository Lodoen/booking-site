import { useState } from "react";
import DeleteView from "./DeleteView";
import AdminView from "./AdminView";

export default function AdminFacing({ venue }) {
  const { id, bookings, ...restOfVenue } = venue;

  const [venueDetails, setVenueDetails] = useState(restOfVenue);
  const [isShowingDeleteView, setIsShowingDeleteView] = useState(false);

  return (
    <section>
      {isShowingDeleteView ? (
        <DeleteView id={id} setIsShowingDeleteView={setIsShowingDeleteView} />
      ) : (
        <AdminView
          id={id}
          bookings={bookings}
          venueDetails={venueDetails}
          setVenueDetails={setVenueDetails}
          setIsShowingDeleteView={setIsShowingDeleteView}
        />
      )}
    </section>
  );
}
