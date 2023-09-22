import { useContext, useState } from "react";
import { BookingContext } from "../../../../../context/BookingContext";
import useBooking from "../../../../../hooks/useBooking";
import useExtractFromDate from "../../../../../hooks/useExtractFromDate";
import useBookingForm from "./useBookingForm";
import * as S from "./index.styles";

export default function BookingForm({ venueInfo }) {
  const { extractDate } = useExtractFromDate();
  const { checkAvailableDates } = useBookingForm();
  const { create } = useBooking();

  const { yourBooking, setYourBooking, currentBookings, setCurrentBookings } =
    useContext(BookingContext);
  const [guests, setGuests] = useState(1);
  const [feedback, setFeedback] = useState(undefined);
  const { id, maxGuests } = venueInfo;

  const handleGuestChange = (event) => setGuests(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { start, end } = yourBooking;
    const guestsNum = parseInt(guests);
    const guestsIsValid =
      typeof guestsNum == "number" && guestsNum >= 1 && guestsNum <= maxGuests;
    const venueIsAvailable =
      start && end ? checkAvailableDates(start, end, currentBookings) : false;

    setFeedback("Loading...");

    if (start && end && guestsIsValid && venueIsAvailable) {
      const body = {
        dateFrom: yourBooking.start,
        dateTo: yourBooking.end,
        guests: guestsNum,
        venueId: id,
      };

      try {
        setFeedback("Loading ...");
        const { fetchedUpdate, stringifiedUpdate } = await create(body);

        if (fetchedUpdate.ok) {
          setFeedback("Venue successfully booked!");
          setYourBooking({ start: undefined, end: undefined });
          setGuests(1);
          setCurrentBookings((prevBookings) => [
            ...prevBookings,
            stringifiedUpdate,
          ]);
        } else {
          setFeedback(stringifiedUpdate.errors[0].message);
        }
      } catch (error) {
        setFeedback("Encountered error on booking");
      }
    } else {
      if (!venueIsAvailable) {
        setFeedback(
          "One or more days within your chosen date range are unavailable due to prior bookings. Please select a different date range.",
        );
      } else {
        setFeedback(
          "Select two available dates, and a valid number of guests.",
        );
      }
    }
  };

  return (
    <S.OrderWrapper>
      <h3>Order</h3>
      <div>
        <p>
          <span>Check-in: </span>
          {yourBooking.start ? extractDate(yourBooking.start) : "undecided"}
        </p>
        <p>
          <span>Checkout: </span>
          {yourBooking.end ? extractDate(yourBooking.end) : "undecided"}
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            onChange={handleGuestChange}
            min={1}
            max={maxGuests ? maxGuests : 1}
            value={guests}
            required
            pattern={`[1-${maxGuests ? maxGuests : 1}]`}
            title={`Please enter a number between 1 and ${
              maxGuests ? maxGuests : 1
            }`}
          />
          <button type="submit" className="base-button">
            Book venue
          </button>
        </form>
        {feedback && <div>{feedback}</div>}
      </div>
    </S.OrderWrapper>
  );
}
