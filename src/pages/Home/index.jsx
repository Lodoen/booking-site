import { useState, useEffect } from "react";

import VenueList from "../../components/VenueList";
import useApi from "../../hooks/useApi";
import Search from "./Search";

export default function Home() {
  const [venuesToRender, setVenuesToRender] = useState([]);
  const { data, isLoading, isError } = useApi("/venues?limit=100");

  //create a state that can be filtered and reversed to original api data
  useEffect(() => {
    setVenuesToRender(data);
  }, [data]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading venues</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <section>
      <h1>Home</h1>
      <Search allVenues={[...data]} setVenues={setVenuesToRender} />
      <VenueList venues={venuesToRender} />
    </section>
  );
}
