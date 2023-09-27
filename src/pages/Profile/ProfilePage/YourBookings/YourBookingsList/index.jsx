import Feedback from "../../../../../components/Feedback";
import YourBookingItem from "./YourBookingItem";
import * as S from "./index.styles";

export default function YourBookingsList({ bookings }) {
  if (bookings.length > 0) {
    return (
      <S.YourBookingsList>
        {bookings.map((booking) => (
          <YourBookingItem key={booking.id} {...booking} />
        ))}
      </S.YourBookingsList>
    );
  }
  return <Feedback message="You currently have no bookings" status="info" />;
}
