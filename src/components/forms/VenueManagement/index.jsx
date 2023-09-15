import * as S from "./index.styles";
import VenueManagementForm from "./VenueManagementForm";

export default function VenueManagement({
  venue = undefined,
  submitFunction,
  isDisabled = false,
}) {
  return (
    <S.VenueShowcaseWrapper>
      <VenueManagementForm
        venue={venue}
        submitFunction={submitFunction}
        isDisabled={isDisabled}
      />
    </S.VenueShowcaseWrapper>
  );
}
