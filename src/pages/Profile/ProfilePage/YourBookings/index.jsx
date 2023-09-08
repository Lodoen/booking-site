import { useState } from "react";
import YourBookingsList from "./YourBookingsList";

export default function YourBookings({ bookings }) {
  const [isShowingBookings, setIsShowingBookings] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShowingBookings(!isShowingBookings)}>
        {isShowingBookings ? "HIDE" : "SHOW"}
      </button>
      {isShowingBookings && (
        <YourBookingsList bookings={bookings ? bookings : []} />
      )}
    </div>
  );
}
