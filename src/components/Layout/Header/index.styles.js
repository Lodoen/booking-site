import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};

  .header-content {
    max-width: ${({ theme }) => theme.screen.max};
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100px auto;
    gap: 30px;
    padding: 15px;
    color: #fff;

    figure {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    .header-content {
      grid-template-columns: 150px auto;
    }
  }
`;
