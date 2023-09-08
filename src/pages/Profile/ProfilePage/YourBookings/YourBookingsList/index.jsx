import YourBookingItem from "./YourBookingItem";

export default function YourBookingsList({ bookings }) {
  if (bookings.length > 0) {
    return bookings.map((booking) => (
      <YourBookingItem key={booking.id} {...booking} />
    ));
  }
  return <div>You currently have no bookings.</div>;
}
