import VenueDetails from "../VenueDetails";
import VenueBooking from "./VenueBooking";
import * as S from "./index.styles";

export default function CustomerFacing({ venue }) {
  const { bookings, id, ...restOfVenue } = venue;
  return (
    <section>
      <S.CustomerFacingWrapper>
        <VenueDetails venue={restOfVenue} />
        <VenueBooking
          bookings={bookings}
          venueInfo={{ id, maxGuests: restOfVenue.maxGuests }}
        />
      </S.CustomerFacingWrapper>
    </section>
  );
}
