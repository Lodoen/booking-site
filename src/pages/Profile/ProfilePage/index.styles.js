import styled from "styled-components";

export const ProfilePage = styled.section`
  h2,
  h3 {
    font-weight: normal;
  }

  section {
    border-bottom: 1px solid #000;

    &:last-of-type {
      border: none;
    }

    &.profile-details {
      max-width: ${({ theme }) => theme.screen.medium};
      margin: 0 auto;
      padding-bottom: 30px;

      figure {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      & > div {
        text-align: center;
      }
    }

    .profile-controls {
      display: flex;
      align-items: center;

      button {
        padding: 0;
        width: 30px;
        height: 30px;
        border: 0;
        background-color: #fff;

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }

    .profile-controls button:hover,
    .toggle-update-form-button:hover {
      cursor: pointer;
    }

    .toggle-update-form-button {
      border: none;
      background-color: #fff;
      padding: 5px 10px;
      font-style: italic;
      color: #0a5485;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
    .profile-details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
