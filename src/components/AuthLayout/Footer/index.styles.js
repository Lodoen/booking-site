import styled from "styled-components";

export const Footer = styled.footer`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-top: 20px;
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
