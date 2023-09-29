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
        if (dayInWeek) {
          const currentDate = extractDateNumber(dayInWeek.dateUTC);
          const startDate = extractDateNumber(yourBooking.start);
          const endDate = extractDateNumber(yourBooking.end);
          const isSelected =
            startDate == currentDate ||
            (startDate <= currentDate && currentDate <= endDate);
          if (dayInWeek.isOutdated) {
            return (
              <td key={index}>
                <span>{dayInWeek.date}</span>
              </td>
            );
          } else if (dayInWeek.isAvailable && user) {
            return (
              <td key={index}>
                <button
                  className={isSelected ? "selected" : "available"}
                  onClick={() => {
                    handleBookingChange(dayInWeek);
                  }}
                >
                  {dayInWeek.date}
                </button>
              </td>
            );
          } else {
            return (
              <td key={index}>
                <span
                  className={dayInWeek.isAvailable ? "available" : "booked"}
                >
                  {dayInWeek.date}
                </span>
              </td>
            );
          }
        }
        return <td key={index}></td>;
      })}
    </tr>
  );
}
