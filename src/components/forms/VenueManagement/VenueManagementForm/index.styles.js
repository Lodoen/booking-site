import styled from "styled-components";
import { BaseForm } from "../../BaseForm/index.styles";

export const VenueManagementForm = styled(BaseForm)`
  .input-group textarea,
  button {
    width: 100%;
  }

  .input-group textarea {
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px 10px;
    border: 1px solid #000;
    min-height: 125px;
  }

  h2,
  h3 {
    font-weight: normal;
  }

  h2 {
    font-size: 1.25rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.max}) {
    .input-group textarea {
      min-height: 270px;
    }
  }
`;
