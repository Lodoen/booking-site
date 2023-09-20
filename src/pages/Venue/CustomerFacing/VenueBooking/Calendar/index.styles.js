import styled from "styled-components";

export const Calendar = styled.div`
  .calendar-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    button.base-button {
      padding: 5px 10px;
      &:hover {
        text-decoration: none;
      }
    }

    div {
      margin: 0 20px;
    }
  }
`;
