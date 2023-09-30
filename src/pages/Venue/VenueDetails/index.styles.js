import styled from "styled-components";
import { VenueShowcaseWrapper } from "../../../components/forms/VenueManagement/index.styles";

export const VenueDetails = styled(VenueShowcaseWrapper)`
  h2,
  h3 {
    font-weight: normal;
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 0px;
  }

  h2 {
    font-size: 1.1rem;
  }

  .image-details-wrapper h2 {
    margin-top: 0;
  }

  .details-amenities-wrapper > section {
    margin: 30px 0;

    span {
      word-break: break-all;
    }

    svg {
      margin-right: 5px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    .details-amenities-wrapper > section {
      margin: 0;
    }

    h1 {
      margin-top: 20px;
    }
  }
`;
