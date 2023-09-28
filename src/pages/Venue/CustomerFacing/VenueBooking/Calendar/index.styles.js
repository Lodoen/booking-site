import styled from "styled-components";

export const Calendar = styled.div`
  .calendar-controls,
  .calendar-explanation {
    width: 210px;
    margin: 0 auto;
  }
  .calendar-controls,
  .calendar-controls button figure,
  .calendar-explanation p {
    display: flex;
    align-items: center;
  }

  .calendar-controls {
    justify-content: space-between;

    button {
      padding: 10px 5px;
      background: none;
      border: none;
      &:hover {
        cursor: pointer;
      }

      figure {
        margin: 0;
        justify-content: center;
        svg {
          width: 25px;
          height: 25px;
        }
      }
    }

    div {
      margin: 0 20px;
    }
  }

  .calendar-explanation {
    p span {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    p:first-of-type span {
      background-color: #84d690;
    }

    p:nth-of-type(2) span {
      background-color: #8bbaff;
    }

    p:last-of-type span {
      background-color: #ff6464;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    .calendar-controls,
    .calendar-explanation {
      width: 245px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    .calendar-controls,
    .calendar-explanation {
      width: 350px;
    }

    .calendar-explanation {
      display: flex;

      p:nth-of-type(2) {
        margin: 0 30px;
      }
    }
  }
`;
