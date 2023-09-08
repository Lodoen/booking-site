import { useState } from "react";
import VenueList from "../../../../components/VenueList";

export default function YourVenues({ venues }) {
  const [isShowingVenues, setIsShowingVenues] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShowingVenues(!isShowingVenues)}>
        {isShowingVenues ? "HIDE" : "SHOW"}
      </button>
      {isShowingVenues && <VenueList venues={venues ? venues : []} />}
    </div>
  );
}
