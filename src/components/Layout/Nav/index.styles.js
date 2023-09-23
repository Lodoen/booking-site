import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;

  ul,
  .dropdown-menu {
    display: flex;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    .navigation-element {
      display: none;
    }
    li:last-of-type {
      margin-left: auto;
    }
  }

  .desc {
    margin: 0 10px;
  }

  .login-href {
    padding: 10px 20px;
  }

  .login-href,
  .dropdown-menu,
  .navigation-element {
    background-color: ${({ theme }) => theme.colors.primary};

    border-radius: 5px;
  }

  .dropdown-menu,
  .navigation-element {
    border: 0;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 10px;

    .icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
    ul {
      gap: 10px;

      .navigation-element {
        display: flex;
      }
    }
  }
`;
