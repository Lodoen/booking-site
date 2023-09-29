import styled from "styled-components";

export const SearchAndFilterContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    display: grid;
    align-items: center;
    gap: 0 10px;
    grid-template-columns: 1fr 100px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
    grid-template-columns: 1fr 125px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    grid-template-columns: 1fr 150px;
    margin-bottom: 20px;
  }
`;
