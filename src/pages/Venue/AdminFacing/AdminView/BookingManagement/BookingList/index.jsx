import Feedback from "../../../../../../components/Feedback";
import BookingItem from "./BookingItem";

export default function BookingList({ bookings }) {
  if (bookings.length > 0 && Array.isArray(bookings)) {
    const sortedBookings = [...bookings].sort(
      (a, b) => new Date(a.updated) - new Date(b.updated),
    );
    return sortedBookings.map((booking) => (
      <BookingItem key={booking.id} {...booking} />
    ));
  }
  return (
    <Feedback
      message="There is currently no bookings at this venue."
      status="info"
    />
  );
}
