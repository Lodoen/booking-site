import styled from "styled-components";

export const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  z-index: 999;

  .dropdown,
  .dropdown button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
  }

  .dropdown {
    padding: 10px 20px;
    word-break: break-all;

    .dropdown-header {
      font-weight: bold;
    }

    & > div {
      border-bottom: 1px solid #fff;
      margin-top: 20px;
      padding-bottom: 20px;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        border: none;
      }
    }

    .user {
      display: grid;
      grid-template-columns: 50px auto;
      margin: 10px 0 20px 0;

      .user-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      .user-details {
        p {
          margin: 5px;
        }
      }
    }

    button {
      display: block;
      margin: 10px 0;
      padding: 10px 10px 10px 0;
      border: none;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
    max-width: ${({ theme }) => theme.screen.max};
    left: 50%;
    transform: translateX(-50%);
    .dropdown {
      width: 50%;
      max-width: 250px;
      border-radius: 0 0 0 10px;
      margin-left: auto;

      & > div:first-of-type {
        margin-top: 20px;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    .dropdown {
      border-radius: 0 0 10px 10px;
    }
  }
`;
