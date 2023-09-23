import styled from "styled-components";

export const VenueBooking = styled.section`
  margin: 50px 0;

  h2,
  h3 {
    font-weight: normal;
  }

  h2 {
    font-size: 1.1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    display: grid;
    gap: 0 75px;
    grid-template-columns: repeat(2, 1fr);

    & > h2 {
      grid-column: 1 / -1;
    }
  }
`;
