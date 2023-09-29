import BookingList from "./BookingList";
import * as S from "./index.styles";

export default function BookingManagement({ bookings = [] }) {
  return (
    <S.BookingManagement>
      <h2>Booking management</h2>
      <BookingList bookings={bookings} />
    </S.BookingManagement>
  );
}
