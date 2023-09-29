import { BsPerson, BsCalendarWeek } from "react-icons/bs";
import * as S from "./index.styles";
import useExtractFromDate from "../../../../../../../hooks/useExtractFromDate";

export default function BookingItem({ guests, dateFrom, dateTo, updated }) {
  const { extractDate } = useExtractFromDate();

  return (
    <S.BookingItem>
      <div className="max-guests-wrapper">
        <BsPerson />
        {guests ? guests : "0"}
      </div>
      <div>
        <BsCalendarWeek />
        {dateFrom && dateTo
          ? `${extractDate(dateFrom)} - ${extractDate(dateTo)}`
          : "Undefined date"}
      </div>
      <div>Booked on: {extractDate(updated)}</div>
    </S.BookingItem>
  );
}
