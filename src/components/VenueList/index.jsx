import Feedback from "../Feedback";
import VenueItem from "./VenueItem";
import * as S from "./index.styles";

export default function VenueList({ venues }) {
  if (venues.length > 0) {
    return (
      <S.VenueList>
        {venues.map((venue) => (
          <VenueItem key={venue.id} {...venue} />
        ))}
      </S.VenueList>
    );
  }
  return (
    <Feedback message="Looks like there is no venues available" status="info" />
  );
}
