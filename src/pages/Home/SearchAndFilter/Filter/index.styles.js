import styled from "styled-components";

export const FilterWrapper = styled.div`
  .transparent-background,
  .floating-form-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .transparent-background,
  .filter-button,
  .filter-button figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .transparent-background {
    background-color: rgba(5, 5, 5, 0.75);
  }

  .floating-form-wrapper {
    overflow-y: scroll;
    scrollbar-color: #272727 #fff;
    scrollbar-width: thin;
    background-color: #fff;
  }

  .filter-button {
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 10px;
    margin-top: 10px;
    padding: 8px 10px;
    width: 100%;
    justify-content: space-between;
    span {
      padding-left: 5px;
    }
    figure {
      margin: 0;
      padding: 0 6px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    .filter-button {
      margin-top: 0;
      figure {
        padding: 0;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
    .floating-form-wrapper {
      position: relative;
      width: auto;
      height: auto;
      min-width: 450px;
      max-height: 80vh;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    .floating-form-wrapper {
      width: 650px;
      max-height: 90vh;
    }
  }
`;
