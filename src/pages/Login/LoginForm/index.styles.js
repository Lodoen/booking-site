import styled from "styled-components";
import { BaseForm } from "../../../components/forms/BaseForm/index.styles";

export const LoginForm = styled(BaseForm)`
  a {
    font-style: italic;
    text-decoration: none;
    color: #0a5485;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    button {
      width: auto;
    }
  }
`;
