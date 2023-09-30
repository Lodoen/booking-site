import styled from "styled-components";

export const ImageCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .media-controls,
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .media-controls {
    padding-top: 10px;
    span {
      margin: 0 10px;
    }
    button svg {
      width: 25px;
      height: 25px;
    }
    figure.basic-modal svg {
      color: #000;
    }
  }

  figure {
    margin: 0;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
