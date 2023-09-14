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

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    .floating-box {
      margin-top: 25px;
    }
  }
`;
