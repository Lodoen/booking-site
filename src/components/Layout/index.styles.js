import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  main > section {
    max-width: ${({ theme }) => theme.screen.max};
    margin: 0 auto;
    padding: 10px;

    button.base-button {
      background-color: ${({ theme }) => theme.colors.primary};
      border: 0;
      color: #fff;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    main > section {
      padding: 10px 30px;
    }
  }
`;
