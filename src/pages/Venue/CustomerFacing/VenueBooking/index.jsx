import { useState } from "react";
import { BookingContext } from "../../../../context/BookingContext";
import Calendar from "./Calendar";
import BookingForm from "./BookingForm";
import * as S from "./index.styles";

export default function VenueBooking({ bookings = [], venueInfo }) {
  const [currentBookings, setCurrentBookings] = useState([...bookings]);
  const [yourBooking, setYourBooking] = useState({
    start: undefined,
    end: undefined,
  });

  return (
    <S.VenueBooking>
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
    </S.VenueBooking>
  );
}
