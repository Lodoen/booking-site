import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  a {
    padding: 10px 0;
    display: block;
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
