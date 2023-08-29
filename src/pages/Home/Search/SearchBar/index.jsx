import { useState } from "react";

function extractLocationInfo(location) {
  const { address, city, country } = location;
  return [address, city, country];
}

function filterVenues(search, venues) {
  if (!search) {
    return venues;
  }
  return venues.filter(({ name, location }) => {
    const venueInfo = [name, ...extractLocationInfo(location)];
    for (let i = 0; i < venueInfo.length; i++) {
      if (venueInfo[i].toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    }
  });
}

export default function SearchBar({ allVenues, setVenues }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    const search = event.target.value;
    setSearchValue(search);
    setVenues(filterVenues(search.trim(), allVenues));
  };

  const handleClear = () => {
    setSearchValue("");
    setVenues(allVenues);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
