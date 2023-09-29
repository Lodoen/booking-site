import YourBookingsList from "./YourBookingsList";

export default function YourBookings({ bookings, isShowingBookings }) {
  return (
    isShowingBookings && (
      <YourBookingsList bookings={bookings ? bookings : []} />
    )
  );
}
