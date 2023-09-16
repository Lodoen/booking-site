import VenueList from "../../../../components/VenueList";

export default function YourVenues({ venues, isShowingVenues }) {
  return isShowingVenues && <VenueList venues={venues ? venues : []} />;
}
