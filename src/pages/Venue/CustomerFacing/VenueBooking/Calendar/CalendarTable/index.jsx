import CalendarTableData from "./CalendarTableData";
import * as S from "./index.styles";

export default function CalendarTable({ weeks = [] }) {
  return (
    <S.CalendarTable>
      <thead>
        <tr>
          <th>Su</th>
          <th>Mo</th>
          <th>Tu</th>
          <th>We</th>
          <th>Th</th>
          <th>Fr</th>
          <th>Sa</th>
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
