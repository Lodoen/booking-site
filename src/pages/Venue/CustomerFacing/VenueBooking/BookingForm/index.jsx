import { useContext, useState } from "react";
import { BookingContext } from "../../../../../context/BookingContext";
import useBooking from "../../../../../hooks/useBooking";
import useExtractFromDate from "../../../../../hooks/useExtractFromDate";
import useBookingForm from "./useBookingForm";

export default function BookingForm({ venueInfo }) {
  const { extractDate } = useExtractFromDate();
  const { checkAvailableDates } = useBookingForm();
  const { create } = useBooking();
  const { yourBooking, setYourBooking, currentBookings, setCurrentBookings } =
    useContext(BookingContext);
  const [guests, setGuests] = useState(1);
  const [feedback, setFeedback] = useState(undefined);

  const handleGuestChange = (event) => setGuests(event.target.value);

  const { id, maxGuests } = venueInfo;

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
      setFeedback("Select two available dates, and a number of guests.");
    }
  };

  return (
    <section>
      <h3>Order info</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
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
        <button type="submit">Submit</button>
      </form>
      {feedback && <div>{feedback}</div>}
      <div>
        <h4>Your booking</h4>
        <p>
          <span>From: </span>
          {yourBooking.start ? extractDate(yourBooking.start) : "undecided"}
        </p>
        <p>
          <span>Until: </span>
          {yourBooking.end ? extractDate(yourBooking.end) : "undecided"}
        </p>
      </div>
    </section>
  );
}
