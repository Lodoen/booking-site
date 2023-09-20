import BookingItem from "./BookingItem";

export default function BookingList({ bookings }) {
  if (bookings.length > 0) {
    return bookings.map((booking) => (
      <BookingItem key={booking.id} {...booking} />
    ));
  }
  return <div>Looks like there is no bookings for this venue</div>;
}
