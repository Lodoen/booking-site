import styled from "styled-components";

export const BookingItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #000;

  &:first-of-type {
    border-top: 1px solid #000;
  }

  .max-guests-wrapper {
    margin-bottom: 5px;
  }

  svg {
    margin-right: 5px;
  }
`;
