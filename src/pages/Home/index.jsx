import { useState, useEffect } from "react";
import VenueList from "../../components/VenueList";
import useApi from "../../hooks/useApi";
import SearchAndFilter from "./SearchAndFilter";
import Loading from "../../components/Loading";
import Feedback from "../../components/Feedback";

const baseFilter = {
  search: undefined,
  price: { min: undefined, max: undefined },
  guests: undefined,
  amenities: {
    wifi: undefined,
    parking: undefined,
    breakfast: undefined,
    pets: undefined,
  },
};

function extractLocationInfo(location) {
  const { address, city, country } = location;
  return [address, city, country];
}

export default function Home() {
  const [venuesToRender, setVenuesToRender] = useState([]);
  const { data, isLoading, isError } = useApi(
    "/venues?limit=100&sort=updated&sortOrder=desc",
  );
  const [filter, setFilter] = useState(baseFilter);

  useEffect(() => {
    let filteredVenues = [...data];

    if (filter.search) {
      filteredVenues = filteredVenues.filter(({ name, location }) => {
        const venueInfo = [name, ...extractLocationInfo(location)];
        for (let i = 0; i < venueInfo.length; i++) {
          if (
            venueInfo[i].toLowerCase().includes(filter.search.toLowerCase())
          ) {
            return true;
          }
        }
      });
    }

    if (filter.price.min) {
      filteredVenues = filteredVenues.filter(
        ({ price }) => price >= filter.price.min,
      );
    }

    if (filter.price.max) {
      filteredVenues = filteredVenues.filter(
        ({ price }) => price <= filter.price.max,
      );
    }

    if (filter.guests) {
      filteredVenues = filteredVenues.filter(
        ({ maxGuests }) => maxGuests >= filter.guests,
      );
    }

    if (filter.amenities) {
      if (filter.amenities.wifi) {
        filteredVenues = filteredVenues.filter(({ meta }) => meta.wifi);
      }

      if (filter.amenities.parking) {
        filteredVenues = filteredVenues.filter(({ meta }) => meta.parking);
      }

      if (filter.amenities.breakfast) {
        filteredVenues = filteredVenues.filter(({ meta }) => meta.breakfast);
      }

      if (filter.amenities.pets) {
        filteredVenues = filteredVenues.filter(({ meta }) => meta.pets);
      }
    }
    setVenuesToRender(filteredVenues);
  }, [data, filter]);

  if (isLoading) {
    return <Loading text="venues" />;
  }

  if (isError) {
    return (
      <section>
        <h1>Error</h1>
        <Feedback message="Encountered error when retrieving venues." />
      </section>
    );
  }

  return (
    <section>
      <h1>List of available venues</h1>
      <SearchAndFilter setFilter={setFilter} filter={filter} />
      <VenueList venues={venuesToRender} />
    </section>
  );
}
