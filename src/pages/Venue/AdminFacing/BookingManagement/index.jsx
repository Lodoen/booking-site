import BookingList from "./BookingList";

export default function BookingManagement({ bookings = [] }) {
  return (
    <section>
      <h2>Booking management</h2>
      <BookingList bookings={bookings} />
    </section>
  );
}
