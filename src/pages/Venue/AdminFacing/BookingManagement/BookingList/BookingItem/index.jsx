import { BsPerson, BsCalendarWeek } from "react-icons/bs";
import * as S from "./index.styles";

export default function BookingItem({ guests, dateFrom, dateTo }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <S.BookingItem>
      <div className="max-guests-wrapper">
        <BsPerson />
        {guests ? guests : "0"}
      </div>
      <div>
        <BsCalendarWeek />
        {dateFrom && dateTo
          ? `${formatDate(dateFrom)} - ${formatDate(dateTo)}`
          : "Undefined date"}
      </div>
    </S.BookingItem>
  );
}
