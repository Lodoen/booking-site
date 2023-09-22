import styled from "styled-components";
import { BaseForm } from "../../../../../components/forms/BaseForm/index.styles";

export const FilterForm = styled(BaseForm)`
  padding: 20px 20px 30px 20px;
  .heading-and-close {
    position: relative;
    border-bottom: 1px solid #272727;
    padding-bottom: 10px;

    button,
    figure,
    h2 {
      margin: 0;
    }

    span,
    button {
      height: 50px;
    }

    span,
    button figure {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      background: none;
      padding: 0;
      border: none;
      &:hover {
        cursor: pointer;
      }
      figure svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  button.clear-button {
    background: none;
    border: none;
    font-weight: normal;
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  h2,
  h3 {
    font-weight: normal;
  }

  h3 {
    margin: 30px 0 10px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    .form-content {
      padding: 0 20px;
    }
  }
`;
