import VenueDetails from "../VenueDetails";
import VenueBooking from "./VenueBooking";

export default function CustomerFacing({ venue }) {
  const { bookings, id, ...restOfVenue } = venue;
  return (
    <div>
      <VenueDetails venue={restOfVenue} />
      <VenueBooking
        bookings={bookings}
        venueInfo={{ id, maxGuests: restOfVenue.maxGuests }}
      />
    </div>
  );
}
