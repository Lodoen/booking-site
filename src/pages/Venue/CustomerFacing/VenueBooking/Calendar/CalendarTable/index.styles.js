import styled from "styled-components";

export const CalendarTable = styled.table`
  border: 1px solid #000;
  border-collapse: collapse;
  margin: 0 auto;

  th,
  td,
  span,
  button {
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }

  th,
  td {
    border: 1px solid #000;
    word-break: break-word;
    text-align: center;
  }

  th {
    font-weight: normal;
  }

  td {
    background-color: #fff;
    padding: 0;
    span,
    button {
      box-sizing: border-box;
    }
    span {
      display: inline-block;
      background-color: #ff6464;
    }
    button {
      border-radius: 0;
      border: 0;
      background-color: #84d690;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    th,
    td,
    span,
    button {
      width: 35px;
      height: 35px;
    }

    td span,
    td button {
      padding: 10px 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    th,
    td,
    span,
    button {
      width: 50px;
      height: 40px;
    }
  }
`;
