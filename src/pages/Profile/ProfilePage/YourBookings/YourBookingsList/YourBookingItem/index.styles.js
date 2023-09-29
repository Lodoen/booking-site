import styled from "styled-components";
import { VenueItem } from "../../../../../../components/VenueList/VenueItem/index.styles";

export const YourBookingItem = styled(VenueItem)`
  button {
    padding: 10px;
    width: 100%;
  }
`;

export const YourCancelledBookingItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 35px;
`;
