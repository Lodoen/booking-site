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
`;
