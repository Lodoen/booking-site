import styled from "styled-components";

export const CalendarTable = styled.table`
  border: 1px solid #000;
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid #000;
    word-break: break-word;
    text-align: center;
  }

  td {
    background-color: #272727;
    padding: 0;
    span,
    button {
      padding: 10px 0;
      width: 100%;
      height: 100%;
    }
    span {
      display: inline-block;
      color: #fff;
    }
    button {
      border-radius: 0;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
