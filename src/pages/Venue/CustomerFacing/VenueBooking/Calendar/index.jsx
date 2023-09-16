import { useState, useContext } from "react";
import CalendarTable from "./CalendarTable";
import { BookingContext } from "../../../../../context/BookingContext";
import useCalendar from "./useCalendar";
import * as S from "./index.styles";

export default function Calendar() {
  const { currentBookings } = useContext(BookingContext);
  const { getListOfDates } = useCalendar(currentBookings);

  const handleMonthIncrease = () => {
    const incrementedDate = new Date(date);
    incrementedDate.setMonth(date.getMonth() + 1);
    setDate(incrementedDate);
  };

  const handleMonthDecrease = () => {
    const decreasedDate = new Date(date);
    decreasedDate.setMonth(date.getMonth() - 1);
    setDate(decreasedDate);
  };

  const [date, setDate] = useState(new Date());
  const listOfDates = getListOfDates(date);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <S.Calendar>
      <div className="calendar-controls">
        <button onClick={handleMonthDecrease}>-</button>
        <div>
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </div>
        <button onClick={handleMonthIncrease}>+</button>
      </div>

      <CalendarTable weeks={listOfDates} />
    </S.Calendar>
  );
}
