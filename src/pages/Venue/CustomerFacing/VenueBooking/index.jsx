import { useState } from "react";
import { BookingContext } from "../../../../context/BookingContext";
import Calendar from "./Calendar";
import BookingForm from "./BookingForm";

export default function VenueBooking({ bookings = [], venueInfo }) {
  const [currentBookings, setCurrentBookings] = useState([...bookings]);
  const [yourBooking, setYourBooking] = useState({
    start: undefined,
    end: undefined,
  });

  return (
    <div>
      <h2>Booking the venue</h2>
      <BookingContext.Provider
        value={{
          yourBooking,
          setYourBooking,
          currentBookings,
          setCurrentBookings,
        }}
      >
        <Calendar />
        <BookingForm venueInfo={venueInfo} />
      </BookingContext.Provider>
    </div>
  );
}
