import styled from "styled-components";

export const Header = styled.header`
  .header-content {
    display: grid;
    grid-template-columns: 100px auto;
    gap: 30px;

    figure {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    padding: 15px;

    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;

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
