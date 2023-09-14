import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  main > section {
    max-width: ${({ theme }) => theme.screen.max};
    margin: 0 auto;
    padding: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    main > section {
      padding: 10px 30px;
    }
  }
`;
