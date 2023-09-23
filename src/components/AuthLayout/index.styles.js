import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;

  .floating-box {
    background-color: #fff;
    padding: 30px;
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
    background-color: ${({ theme }) => theme.colors.secondary};

    .floating-box-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .floating-box {
      width: 300px;
      border-radius: 10px;
      padding: 50px;
    }
  }
`;
