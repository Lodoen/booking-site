import styled from "styled-components";

export const VenueItem = styled.div`
  width: 200px;
  margin: 0 auto;
  margin-bottom: 50px;
  word-break: break-word;

  a {
    color: #000;
    text-decoration: none;

    &:hover > div.title-and-rating h2 {
      text-decoration: underline;
    }
  }

  .venue-showcase {
    height: 200px;
    width: 200px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  h2,
  figure {
    margin: 0;
  }

  .title-and-rating,
  .detail {
    display: flex;
    align-items: center;
  }

  .title-and-rating {
    justify-content: space-between;
    margin-top: 10px;
  }

  .detail {
    margin: 10px 0;

    figure {
      display: inline;

      svg {
        margin-right: 5px;
        width: 20px;
        height: 20px;
      }
    }
  }

  @media screen and (min-width: 400px) {
    width: ${({ theme }) => theme.screen["extra-small"]};

    .venue-showcase {
      height: ${({ theme }) => theme.screen["extra-small"]};
      width: ${({ theme }) => theme.screen["extra-small"]};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    width: 225px;

    .venue-showcase {
      height: 225px;
      width: 225px;
    }
  }

  @media screen and (min-width: 750px) {
    width: ${({ theme }) => theme.screen["extra-small"]};

    .venue-showcase {
      height: ${({ theme }) => theme.screen["extra-small"]};
      width: ${({ theme }) => theme.screen["extra-small"]};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    width: 225px;

    .venue-showcase {
      height: 225px;
      width: 225px;
    }
  }
`;
