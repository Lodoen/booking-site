import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondary};

  .floating-box {
    background-color: #fff;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.screen.small};
    padding: 30px;
    border-radius: 10px;
  }

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

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    .floating-box {
      margin-top: 25px;
    }
  }
`;
