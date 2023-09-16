import styled from "styled-components";
import { VenueShowcaseWrapper } from "../../../components/forms/VenueManagement/index.styles";

export const VenueDetails = styled(VenueShowcaseWrapper)`
  h2,
  h3 {
    font-weight: normal;
  }

  h2 {
    font-size: 1.25rem;
  }

  .image-details-wrapper h2 {
    margin-top: 0;
  }

  .details-amenities-wrapper > section {
    margin: 30px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    .details-amenities-wrapper > section {
      margin: 0;
    }
  }
`;
