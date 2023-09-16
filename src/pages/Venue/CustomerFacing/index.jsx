import VenueDetails from "../VenueDetails";
import VenueBooking from "./VenueBooking";

export default function CustomerFacing({ venue }) {
  const { bookings, id, ...restOfVenue } = venue;
  return (
    <section>
      <VenueDetails venue={restOfVenue} />
      <VenueBooking
        bookings={bookings}
        venueInfo={{ id, maxGuests: restOfVenue.maxGuests }}
      />
    </section>
  );
}
