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

      &:enabled:hover,
      &:disabled {
        background-color: ${({ theme }) => theme.colors.secondary};
      }

      &:enabled:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    main > section {
      padding: 10px 30px;
    }
  }
`;
