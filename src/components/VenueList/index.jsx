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
  return <div>Looks like there is no venues available</div>;
}
