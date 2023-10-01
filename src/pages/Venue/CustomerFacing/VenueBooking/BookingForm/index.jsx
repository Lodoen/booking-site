import { useContext, useState } from "react";
import { BookingContext } from "../../../../../context/BookingContext";
import useBooking from "../../../../../hooks/useBooking";
import useExtractFromDate from "../../../../../hooks/useExtractFromDate";
import useBookingForm from "./useBookingForm";
import * as S from "./index.styles";
import useFeedback from "../../../../../hooks/useFeedback";
import Feedback from "../../../../../components/Feedback";
import { UserContext } from "../../../../../context/UserContext";

export default function BookingForm({ venueInfo }) {
  const { extractDate } = useExtractFromDate();
  const { checkAvailableDates } = useBookingForm();
  const { create } = useBooking();
  const { feedbackMessage, feedbackType, setFeedback } = useFeedback();
  const { user } = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(false);

  const { yourBooking, setYourBooking, currentBookings, setCurrentBookings } =
    useContext(BookingContext);
  const [guests, setGuests] = useState(1);
  const { id, maxGuests, price } = venueInfo;

  const daysBetweenStartAndEnd =
    (new Date(yourBooking.end) - new Date(yourBooking.start)) /
    (1000 * 3600 * 24);
  const totalPrice = (daysBetweenStartAndEnd + 1) * price;

  const handleGuestChange = (event) => setGuests(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { start, end } = yourBooking;
    const guestsNum = parseInt(guests);
    const guestsIsValid =
      typeof guestsNum == "number" && guestsNum >= 1 && guestsNum <= maxGuests;
    const venueIsAvailable =
      start && end ? checkAvailableDates(start, end, currentBookings) : false;

    if (start && end && guestsIsValid && venueIsAvailable) {
      const body = {
        dateFrom: yourBooking.start,
        dateTo: yourBooking.end,
        guests: guestsNum,
        venueId: id,
      };

      try {
        setIsDisabled(true);
        setFeedback("Loading ...", "info");
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
          setFeedback(stringifiedUpdate.errors[0].message, "error");
        }
      } catch (error) {
        setFeedback("Encountered error on booking.", "error");
      } finally {
        setIsDisabled(false);
      }
    } else {
      if (!start || !end) {
        setFeedback(
          "Select a check-in and checkout date for your desired booking duration.",
          "warning",
        );
      } else if (!venueIsAvailable) {
        setFeedback(
          "One or more days within your chosen date range are unavailable due to prior bookings. Please select a different date range.",
          "warning",
        );
      } else {
        setFeedback(
          "Select two available dates, and a valid number of guests.",
          "warning",
        );
      }
    }
  };

  return user ? (
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
          <p>
            <span>Total price: </span>
            {typeof totalPrice === "number" && !isNaN(totalPrice)
              ? `${totalPrice}kr`
              : "undecided"}
          </p>
          <button type="submit" className="base-button" disabled={isDisabled}>
            Book venue
          </button>
        </form>
        <Feedback message={feedbackMessage} status={feedbackType} />
      </div>
    </S.OrderWrapper>
  ) : (
    <Feedback
      message="You have to be logged in to book venues."
      status="info"
    />
  );
}
