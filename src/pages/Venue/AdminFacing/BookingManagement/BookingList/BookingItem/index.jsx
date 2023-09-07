import { BsPerson, BsCalendarWeek } from "react-icons/bs";

export default function BookingItem({ guests, dateFrom, dateTo }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <div>
      <div>
        <BsPerson />
        {guests ? guests : "0"}
      </div>
      <div>
        <BsCalendarWeek />
        {dateFrom && dateTo
          ? `${formatDate(dateFrom)} - ${formatDate(dateTo)}`
          : "Undefined date"}
      </div>
    </div>
  );
}
