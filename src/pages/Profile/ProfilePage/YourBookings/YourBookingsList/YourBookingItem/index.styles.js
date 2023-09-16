import styled from "styled-components";
import { VenueItem } from "../../../../../../components/VenueList/VenueItem/index.styles";

export const YourBookingItem = styled(VenueItem)`
  button {
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0;
    color: #fff;
    border-radius: 5px;
    width: 100%;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
