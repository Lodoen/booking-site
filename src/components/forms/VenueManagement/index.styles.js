import styled from "styled-components";

export const VenueShowcaseWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    .image-details-wrapper,
    .details-amenities-wrapper {
      display: grid;
    }

    .image-details-wrapper {
      grid-template-columns: 300px 1fr;
      gap: 50px;
    }

    .details-amenities-wrapper {
      grid-template-columns: 1fr 1fr;
      gap: 25px;
    }
  }

  .description-wrapper {
    margin: 20px 0;
  }
`;
