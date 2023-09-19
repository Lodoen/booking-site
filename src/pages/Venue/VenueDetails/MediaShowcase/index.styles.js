import styled from "styled-components";

export const MediaShowcase = styled.div`
  .basic-carousel .media-wrapper {
    width: 200px;
    height: 200px;

    &:hover {
      cursor: pointer;
    }
  }

  .modal-carousel,
  .modal-close {
    position: fixed;
    top: 0;
  }

  .modal-carousel {
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(5, 5, 5, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;

    .media-wrapper {
      width: 200px;
      height: 200px;
    }

    .media-controls span,
    button svg {
      color: #fff;
    }

    .modal-close {
      right: 0;
      figure {
        padding: 10px 10px 0 0;
        margin: 0;
      }
    }
  }

  .carousel-button {
    background: none;
    border: none;

    svg {
      width: 40px;
      height: 40px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen["extra-small"]}) {
    .basic-carousel .media-wrapper,
    .modal-carousel .media-wrapper {
      width: 250px;
      height: 250px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    .basic-carousel .media-wrapper {
      width: 300px;
      height: 300px;
    }

    .modal-carousel .media-wrapper {
      width: 400px;
      height: 400px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    .basic-carousel .media-wrapper {
      width: 450px;
      height: 450px;
    }

    .modal-carousel .media-wrapper {
      width: 500px;
      height: 500px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    .basic-carousel .media-wrapper {
      width: 300px;
      height: 300px;
    }
  }
`;
