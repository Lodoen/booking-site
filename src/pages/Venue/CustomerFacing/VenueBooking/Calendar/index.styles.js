import styled from "styled-components";

export const Calendar = styled.div`
  .calendar-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    button {
      padding: 5px 10px;
      background-color: ${({ theme }) => theme.colors.primary};
      border: 0;
      color: #fff;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }

    div {
      margin: 0 20px;
    }
  }
`;
