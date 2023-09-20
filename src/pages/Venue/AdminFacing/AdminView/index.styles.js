import styled from "styled-components";

export const AdminView = styled.div`
  .admin-controls-wrapper {
    margin-bottom: 20px;

    .admin-controls {
      button {
        padding: 10px;
        &:first-of-type {
          margin-right: 10px;
        }
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
