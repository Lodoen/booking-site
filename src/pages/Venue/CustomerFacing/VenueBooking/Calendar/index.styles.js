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
          color: #000;
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

    .calendar-explanation-row:first-of-type {
      p:first-of-type span {
        background-color: #84d690;
      }
      p:last-of-type span {
        background-color: #8bbaff;
      }
    }
    .calendar-explanation-row:last-of-type {
      p:first-of-type span {
        background-color: #ff6464;
      }

      p:last-of-type span {
        border: 1px solid #000;
        background-color: #fff;
      }
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

      .calendar-explanation-row:first-of-type {
        margin-right: 60px;
      }
    }
  }
`;
