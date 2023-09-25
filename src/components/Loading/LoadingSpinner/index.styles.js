import styled from "styled-components";

export const LoadingSpinner = styled.div`
  border: 5px solid ${({ theme }) => theme.colors.primary};
  border-top: 5px solid #fff;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
