import CalendarTableData from "./CalendarTableData";
import * as S from "./index.styles";

export default function CalendarTable({ weeks = [] }) {
  return (
    <S.CalendarTable>
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, index) => (
          <CalendarTableData key={index} week={week} />
        ))}
      </tbody>
    </S.CalendarTable>
  );
}
