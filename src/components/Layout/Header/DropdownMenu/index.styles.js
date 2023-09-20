import styled from "styled-components";

export const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  z-index: 999;

  .dropdown {
    background-color: #fff;
    border: 1px solid #000;
    padding: 10px 20px;

    .dropdown-header {
      font-weight: bold;
    }

    & > div {
      border-bottom: 1px solid #000;
      margin-top: 20px;
      padding-bottom: 20px;

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
      background-color: white;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    .dropdown {
      width: 50%;
      border-radius: 10px;
      margin-left: auto;
    }
  }
`;
