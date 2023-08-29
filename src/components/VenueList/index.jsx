import VenueItem from "./VenueItem";

export default function VenueList({ venues }) {
  if (venues.length > 0) {
    return venues.map((venue) => <VenueItem key={venue.id} {...venue} />);
  }
  return <div>Looks like there is no venues available</div>;
}
