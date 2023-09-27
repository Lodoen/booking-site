import { useContext } from "react";
import { BookingContext } from "../../../../../../../context/BookingContext";
import useExtractFromDate from "../../../../../../../hooks/useExtractFromDate";
import { UserContext } from "../../../../../../../context/UserContext";

export default function CalendarTableData({ week = [] }) {
  const { extractDateNumber } = useExtractFromDate();
  const { yourBooking, setYourBooking } = useContext(BookingContext);
  const { user } = useContext(UserContext);
  const daysInAWeekIndexes = [0, 1, 2, 3, 4, 5, 6];

  const handleBookingChange = (props) => {
    const { dateUTC } = props;

    //initiate new booking
    if (!yourBooking.start || (yourBooking.start && yourBooking.end)) {
      setYourBooking({ start: dateUTC, end: undefined });
    }
    //booking only contains start date
    else if (!yourBooking.end) {
      const newDate = extractDateNumber(dateUTC);
      const oldDate = extractDateNumber(yourBooking.start);
      const newOrder =
        newDate > oldDate
          ? { start: yourBooking.start, end: dateUTC }
          : { start: dateUTC, end: yourBooking.start };
      setYourBooking(newOrder);
    }
    //error
    else {
      setYourBooking({ start: undefined, end: undefined });
    }
  };

  return (
    <tr>
      {daysInAWeekIndexes.map((index) => {
        const dayInWeek = week.find((day) => day.weekdayIndex === index);
        return dayInWeek ? (
          <td key={index}>
            {dayInWeek.isAvailable && user ? (
              <button
                className="available"
                onClick={() => {
                  handleBookingChange(dayInWeek);
                }}
              >
                {dayInWeek.date}
              </button>
            ) : (
              <span className={dayInWeek.isAvailable ? "available" : "booked"}>
                {dayInWeek.date}
              </span>
            )}
          </td>
        ) : (
          <td key={index}></td>
        );
      })}
    </tr>
  );
}
