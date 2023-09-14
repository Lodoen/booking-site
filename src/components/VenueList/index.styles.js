import styled from "styled-components";

export const VenueList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  padding: 20px;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
