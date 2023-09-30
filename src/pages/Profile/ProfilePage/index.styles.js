import styled from "styled-components";

export const ProfilePage = styled.section`
  h1 {
    font-size: 1.5rem;
    margin: 20px 0 0 0;
  }

  h2,
  h3 {
    font-weight: normal;
  }

  .profile-details-wrapper {
    border-bottom: 1px solid #000;
  }

  section {
    &.profile-details figure,
    .profile-controls {
      display: flex;
      align-items: center;
    }

    &.profile-details {
      max-width: ${({ theme }) => theme.screen.medium};
      margin: 0 auto;
      padding: 20px 0 20px 0;

      figure {
        margin: 0;
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
      & > h2 {
        font-size: 1.25rem;
        margin-right: 5px;
      }

      button {
        padding: 0;
        width: 20px;
        height: 20px;
        border: 0;
        background-color: #fff;

        svg {
          width: 100%;
          height: 100%;
          color: #000;
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
