import CalendarTableData from "./CalendarTableData";

export default function CalendarTable({ weeks = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, index) => (
          <CalendarTableData key={index} week={week} />
        ))}
      </tbody>
    </table>
  );
}
