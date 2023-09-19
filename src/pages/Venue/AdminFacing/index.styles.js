import styled from "styled-components";

export const AdminSection = styled.section`
  .admin-controls button,
  .delete-view-button {
    padding: 10px;
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

  .delete-view-button {
    display: block;
    &:first-of-type {
      margin-bottom: 10px;
    }
  }

  .admin-controls-wrapper {
    margin-bottom: 20px;

    .admin-controls {
      button:first-of-type {
        margin-right: 10px;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    .admin-controls-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
