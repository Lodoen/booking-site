import styled from "styled-components";

export const SearchContainer = styled.div`
  .search-container {
    width: 100%;
    position: relative;

    input {
      border-radius: 10px;
      border: 1px solid #000;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
    }

    button {
      border: 0;
      position: absolute;
      right: 10px;
      background-color: transparent;
      height: 100%;
      padding: 0 10px;
      cursor: pointer;
      figure {
        color: #000;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
